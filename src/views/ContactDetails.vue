<template>
  <div v-if="contact" class="contact-details-container">
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.phone }}</h3>
    <h3>{{ contact.email }}</h3>
    <button @click="back">Back</button>
    <router-link :to="`/contact/edit/${contact._id}`">Edit</router-link>
    <button @click="removeContact(contact._id)">Delete</button>
    <transfer-fund v-if="contact" :contact="contact" />
    <div class="user-list">
      <move-list :title="contact._id" :moves="getUser.user.moves" />
    </div>
  </div>
  <p v-else>Loading...</p>
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
  computed: {},
  getUser() {
    let loggedInUser = this.$store.state.user;
    console.log("loggedInUser: ", loggedInUser);
    if (!loggedInUser) router.push({ path: `/signup` });
    else {
      console.log("else!!!!!!!!!!!!!!!!!!");
      console.log("loggedInUser", loggedInUser.user);
      return loggedInUser;
    }
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