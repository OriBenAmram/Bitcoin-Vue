<template>
  <div v-if="contact" class="contact-details-page narrow-layout">
    <div class="contact-content">
      <div class="contact-image">
        <img :src="getAvatar(contact.imgIdx)" alt />
      </div>
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
        <div class="flex full"></div>
        <!-- Buttons -->
        <div class="contact-options">
          <div class="buttons-container">
            <button class="secondary-btn" @click="onEdit">
              Edit {{ contact.name }}
            </button>
            <button class="delete-link" @click="removeContact(contact._id)">
              Delete contact
            </button>
          </div>
        </div>
      </section>
    </div>
    <!-- <section class="details-moves">
      <h2>Your transfers</h2>
      <move-list :title="contact._id" :moves="getUser.user.moves" />
    </section> -->
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
    getAvatar(idx) {
      return `https://xsgames.co/randomusers/assets/avatars/male/${idx}.jpg`;
    },
    back() {
      this.$router.push("/contact");
    },
    async removeContact(contactId) {
      await this.$store.dispatch({ type: "removeContact", contactId });
      this.$router.push("/contact");
      const userMsg = { header: `Deleted successfuly`, txt: `You just deleted ${this.contact.name} from your contact list` }
      this.$store.dispatch({ type: "onSetUserMsg", userMsg });
    },
    onEdit() {
      // this.$router.push(`/contact/edit/${contact._id}`);
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