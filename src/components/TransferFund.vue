<template>
  <form class="transfer-form" @submit.prevent="onTransfer">
    <input
      class="transfer-input"
      type="number"
      name="amount"
      placeholder="Please Enter Amount to transfer..."
      v-model="amount"
    />
    <button class="btn-transfer" type="submit">Transfer</button>
  </form>
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