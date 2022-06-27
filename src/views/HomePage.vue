<template>
  <div v-if="user?.name" class="home-page">
    <div class="home-header">
      <h1 class="home-title">Hi {{ user.name }}, it's good to see you</h1>
      <h2 class="header-sub-title">Manage, transfer and keep being updated</h2>
    </div>
    <div v-if="user" class="user-info-modal">
      <div class="user-info">
        <div class="dry-details">
          <div class="user-balance">
            <h3 class="user-title">{{ user.name }}'s balance</h3>
            <div>
              <p>
                USD:
                <span class="grey-text">${{ user.coins }}</span>
              </p>
              <p>
                Bitcoin:
                <span class="light-text">${{ userBit }}</span>
              </p>
            </div>
          </div>
          <div class="btc-value">
            <p class="grey-text">Current BTC USD:</p>
            <div class="flex column">
              <div class="flex">
                <span class="describe-btn round small">live</span>
                <h2>${{ rate }}</h2>
              </div>
              <span class="small grey-text">According to Wallstreet</span>
            </div>
          </div>
        </div>
        <div class="user-call-to-action">
          <button class="primary-btn" @click="onViewContacts">View contacts</button>
        </div>
        <div class="move-list-container">
          <MoveList :moves="getUser.user.moves" />
        </div>
      </div>

      <div class="user-chart">
        <Chart v-if="marketPrice" :coinData="marketPrice" />
      </div>
    </div>
  </div>
  <div v-else class="user-redirect">
    <button @click="onRedirect">Please enter your name first</button>
  </div>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
import Chart from "@/components/chart.vue";

import MoveList from "@/components/MoveList.vue";
export default {
  data() {
    return {
      user: null,
      rate: null,
      marketPrice: null,
    };
  },
  methods: {
    onRedirect() {
      this.$router.push("/signup");
    },
    onViewContacts() {
      this.$router.push("/contact");
    },
    async loadData() {
      this.marketPrice = await bitcoinService.getMarketPrice();
      console.log("marketPrice", this.marketPrice);
    },
  },
  computed: {
    getUser() {
      let loggedInUser = this.$store.state.user;
      if (!loggedInUser) router.push({ path: `/signup` });
      else {
        return loggedInUser;
      }
    },
    userBit() {
      return this.user.coins * this.rate;
    },
  },
  async created() {
    this.rate = await bitcoinService.getRate(1);
    this.user = this.$store.state.user.user;
    this.loadData();
  },
  components: {
    MoveList,
    Chart,
  },
};
</script>