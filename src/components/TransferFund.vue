<template>
  <form class="input-btn-form" @submit.prevent="onTransfer">
    <input
      type="number"
      name="amount"
      placeholder="Please Enter Amount to transfer..."
      v-model="amount"
    />
    <button class="primary-btn" type="submit">Transfer</button>
  </form>
  <p class="grey-text">The transfer is in USD dollars, and would be transfered only when {{ contact.name.toLowerCase() }} will accept your payment.</p>
</template>

<script>
import { userService } from "@/services/user.service.js";

export default {
  props: {
    contact: {
      type: Object,
    },
  },
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    onTransfer() {
      const user = userService.addMove(this.contact, +this.amount);
      console.log("user", user);
      this.$store.dispatch({ type: "onAddMove", user });
      this.amount = "";
    },
  },
};
</script>

<style>
</style>