<template>
  <div v-if="contact" class="contact-details-page main-layout">
    <h1>baba test</h1>
    <div class="contact-content">
      <div class="contact-image"></div>
      <section class="contact-info">
        <div class="info-header">
          <button class="small-link" @click="back">Back</button>
          <h3 class="contact-phone">{{ contact.phone }}</h3>
        </div>
        <!-- Name and mail -->
        <div class="contact-shallow-details">
          <h2 class="contact-name">{{ contact.name }}</h2>
          <h3 class="contact-email">{{ contact.email }}</h3>
        </div>
        <!-- Modal for transfer -->
        <section class="transfer-modal">
          <transfer-fund v-if="contact" :contact="contact" />
        </section>
        <!-- Buttons -->
        <div class="contact-options">
          <h1>baba</h1>
          <router-link :to="`/contact/edit/${contact._id}`">Edit</router-link>
          <button @click="removeContact(contact._id)">Delete</button>
        </div>
      </section>
      <section class="details-moves">
        Contact moves
        <!-- <move-list :title="contact._id" :moves="getUser.user.moves" /> -->
      </section>
    </div>
  </div>
  <p v-else>Loading...!</p>
</template>

<script>
import contactService from "@/services/contact.service.js";
import TransferFund from "@/components/transferFund.vue";
import MoveList from "@/components/MoveList.vue";
export default {
  data() {
    return {
      contact: null,
    };
  },
  computed: {
    getUser() {
      let loggedInUser = this.$store.state.user;
      if (!loggedInUser) router.push({ path: `/signup` });
      else {
        return loggedInUser;
      }
    },
  },
  methods: {
    back() {
      this.$router.push("/contact");
    },
    async removeContact(contactId) {
      console.log("contactId:", contactId);

      await this.$store.dispatch({ type: "removeContact", contactId });
      this.$router.push("/contact");
    },
  },
  async created() {
    const _id = this.$route.params._id;
    this.contact = await contactService.getContactById(_id);
    console.log("contact", this.contact);
  },
  components: {
    TransferFund,
    MoveList,
  },
};
</script>

<style lang="scss">
.contact-details {
  background-color: lightslategray;
  color: beige;
  padding: 10px;
}
</style>