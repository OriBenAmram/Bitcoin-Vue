<template>
  <main class="statistic-page main-layout">
    <section class="statistic-content">
      <div class="main-data-container">
        <div class="small-data-container">
          <div class="box">
            <div class="icon-container">
              <v-icon name="co-dollar" />
            </div>
            <div class="box-details">
              <h2>Total USD</h2>
              <p>{{ this.user.coins }}</p>
            </div>
          </div>
          <div class="box">
            <div class="icon-container">
              <v-icon name="la-bitcoin" />
            </div>
            <div class="box-details">
              <h2>Total BTC</h2>
              <p>{{ userBit }}</p>
            </div>
          </div>
          <div class="box">
            <div class="icon-container">
              <v-icon name="oi-number" />
            </div>
            <div class="box-details">
              <h2>Total USD</h2>
              <p>{{ this.user.coins }}</p>
            </div>
          </div>
          <div class="box">
            <div class="icon-container">
              <v-icon name="ri-divide-fill" />
            </div>
            <div class="box-details">
              <h2>Average transfer($)</h2>
              <p>{{ getAvgTransform }}</p>
            </div>
          </div>
        </div>
        <div class="main-chart-container">
          <Chart v-if="tradeVolume" :coinData="tradeVolume" />
        </div>
      </div>
      <div class="side-data-container">
        <div class="secondary-chart-container">
          <Chart v-if="marketPrice" :coinData="marketPrice" />
          <!-- <Chart v-if="avgBlockSize" :coinData="avgBlockSize" /> -->
        </div>
        <div class="move-list-container">
          <Move-list :moves="user.moves" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Chart from "@/components/Chart.vue";
import MoveList from "@/components/MoveList.vue";
import { bitcoinService } from "../services/bitcoin.service";
export default {
  data() {
    return {
      tradeVolume: null,
      avgBlockSize: null,
      marketPrice: null,
      rate: null,
      user: null
    };
  },
  async created() {
    if (!this.$store.getters.user) return this.$router.push("/signup");
    this.user = this.$store.state.user.user;
    this.rate = await bitcoinService.getRate(1);
    this.loadData();
  },
  methods: {
    async loadData() {
      this.tradeVolume = await bitcoinService.getTradeVolume();
      this.avgBlockSize = await bitcoinService.getAvgBlockSize();
      this.marketPrice = await bitcoinService.getMarketPrice();
    },

  },

  computed: {
    getAvgTransform() {
      const sumOfTran = this.user.moves.reduce((acc, move) => {
        return acc + move.amount
      }, 0)
      console.log('AVG transfer => ', sumOfTran / this.user.moves.length)
      return sumOfTran / this.user.moves.length
    },
    userBit() {
      return this.user.coins * this.rate;
    },

  },


  components: { Chart, MoveList },
};
</script>