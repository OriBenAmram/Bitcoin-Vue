<template>
  <div class="view-wrapper" @click="onGoBack">
    <main
      class="contact-edit main-layout view"
      v-if="contact"
      @click="(ev) => ev.stopPropagation()"
    >
      <button @click="onGoBack" class="close-btn">x</button>
      <form class="edit-form" @submit="onSaveContact">
        <input type="text" placeholder="Name" v-model="contact.name" />
        <input type="email" placeholder="Email" v-model="contact.email" />
        <input type="tel" placeholder="Phone" v-model="contact.phone" />
        <button>save</button>
      </form>
    </main>
  </div>
</template>

<script>
import contactService from "@/services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },

  created() {
    if (!this.$store.getters.user) return this.$router.push("/signup");
    this.loadContact();
  },

  methods: {
    async loadContact() {
      const { _id } = this.$route?.params;
      if (!_id) return (this.contact = contactService.getEmptyContact());
      const contact = await contactService.getContactById(_id);
      console.log("contact", contact);
      this.contact = JSON.parse(JSON.stringify(contact)); // Deep copy of contact to prevent mutations.
    },
    async onSaveContact(ev) {
      ev.preventDefault();
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
    },
    onGoBack() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss">
.contact-edit {
  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
