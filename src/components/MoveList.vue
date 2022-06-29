<template>
  <ul class="move-list clean-list" v-if="getMoves.length > 0">
    <li v-for="move in getMoves" :key="move.at">
      <div class="move-preview">
        <div class="flex column direct-description">
          <div>
            <p class="time-description">{{ getTime(move.at) }}</p>
            <h2 v-if="!title" class="move-to">To {{ move.to }}</h2>
          </div>
          <p class="btn-value">{{ formatToCurrency(move.amount, "BTC") }}</p>
        </div>
        <div class="move-amount">
          <p>{{ formatToCurrency((1 / rate) * move.amount) }}</p>
          <h3>
            status:
            <span >approved</span>
          </h3>
        </div>
      </div>
    </li>
  </ul>
  <h2 v-else class="no-moves-header">No Transfers have been made yet</h2>
</template>
<script>
import { bitcoinService } from "../services/bitcoin.service";
export default {
  props: {
    title: {
      type: String,
    },
    movesNumber: {
      type: Number,
      default: Infinity,
    },
    moves: {
      type: Array,
    },
  },
  data() {
    return {
      rate: null,
    };
  },
  computed: {
    getMoves() {
      // let user = userService.getUser();
      if (!this.title)
        return this.moves
          .slice(this.moves.length - this.movesNumber, this.moves.length)
          .reverse();
      else
        return this.moves.filter((move) => move.toId === this.title).reverse();
    },

  },
  methods: {
    async getRate(coin) {
      this.rate = await bitcoinService.getRate(coin);
      setTimeout(() => {
        this.getRate(1);
      }, 30000);
    },
    formatToCurrency(num, curr = "USD") {
      return num.toLocaleString("en-US", {
        style: "currency",
        currency: curr,
      });
    },
    getTime(timestamp) {
      return new Date(timestamp)
        .toLocaleString("es-CL", { hour12: false })
        .slice(0, 16)
        .replace(" ", ", ");
    },
    getStatusClass(status) {
      if (status === 'pedding') return 'gold'
      else if (status === 'approved') return 'green'
      return 'gold'
    }
  },
  components: {},
  async created() {
    this.getRate(1);
  },
};
</script>
