<template>
  <main class="statistic-page main-layout">
    <Chart v-if="tradeVolume" :coinData="tradeVolume" />
    <Chart v-if="avgBlockSize" :coinData="avgBlockSize" />
    <Chart v-if="marketPrice" :coinData="marketPrice" />
  </main>
</template>

<script>
import Chart from "@/components/Chart.vue";
import { bitcoinService } from "../services/bitcoin.service";
export default {
  data() {
    return {
      tradeVolume: null,
      avgBlockSize: null,
      marketPrice: null,
    };
  },
  created() {
    if (!this.$store.getters.user) return this.$router.push("/signup");
    this.loadData();
  },
  methods: {
    async loadData() {
      this.tradeVolume = await bitcoinService.getTradeVolume();
      this.avgBlockSize = await bitcoinService.getAvgBlockSize();
      this.marketPrice = await bitcoinService.getMarketPrice();
    },
  },

  components: { Chart },
};
</script>

<style lang="scss">
.statistic-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  gap: 3rem;
  margin: auto;
}
</style>
