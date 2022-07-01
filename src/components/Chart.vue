<template>
  <Line class="chart" :chart-data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  props: {
    coinData: {
      type: Object,
      required: true,
    },
  },
  components: { Line },
  data() {
    return {
      chartData: {
        labels: this.coinData.values.map((value) =>
          new Date(+(value.x + "000")).toLocaleDateString()
        ),
        datasets: [
          {
            label: this.coinData.name,
            backgroundColor: "rgb(17, 153, 250)",
            fill: true,
            borderColor: "rgb(17, 153, 250)",
            tension: 0.1,
            pointRadius: 0.1,
            borderWidth: 2,
            responsive: false,
            maintainAspectRatio: false,
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
