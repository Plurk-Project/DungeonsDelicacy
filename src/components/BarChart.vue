<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['label', 'labels', 'chartData'],
  data: () => ({
    gradient: null,
  }),
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)'); // show this color at 0%;
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)'); // show this color at 50%
    this.gradient.addColorStop(1, 'rgba(145, 67, 204, 0.46)'); // show this color at 100%

    this.renderChart(
      {
        labels: this.$props.labels,
        datasets: [
          {
            label: this.$props.label,
            backgroundColor: this.gradient,
            data: this.$props.chartData,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
};
</script>
