<template>
  <Bar class="chart" :chart-data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  props: {
    coinData: {
      type: Object,
      required: true,
    },
  },
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: this.coinData.values.map((value) =>
          new Date(+(value.x + "000")).toLocaleDateString()
        ),
        datasets: [
          {
            label: this.coinData.name,
            backgroundColor: "#333",
            data: this.coinData.values.map((value) => value.y),
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>
