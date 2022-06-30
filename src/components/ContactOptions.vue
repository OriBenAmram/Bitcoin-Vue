<template>
  <section class="contact-options">
    <h2>Spread your kindness!</h2>
    <p>
      Fill free to add someone new to your contacts!
      <br />And! you can always just give someone random from your contacts some
      money
    </p>
    <div class="active-contact-triggers">
      <button class="primary-btn" @click="onTransfer">I feel generous!</button>
      <router-link class="secondary-btn" to="/contact/edit"
        >Add a new contact</router-link
      >
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
import { userService } from "../services/user.service";
export default {
  data() {
    return {};
  },
  methods: {
    onTransfer() {
      const randomContact = contactService.getRandomContact();
      console.log("randomContact", randomContact);
      const user = userService.addMove(randomContact, 100);
      console.log("user", user);
      this.$store.dispatch({ type: "onAddMove", user });
      this.amount = "";
    },
  },
  mounted() {},
};
</script>