<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['label', 'labels', 'datasets'],
  data: () => ({
    backgroundColors: [],
  }),
  mounted() {
    this.backgroundColors[0] = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450);
    this.backgroundColors[0].addColorStop(0, 'rgba(255, 0,0, 0.5)'); // show this color at 0%;
    this.backgroundColors[0].addColorStop(0.5, 'rgba(255, 0, 0, 0.25)'); // show this color at 50%
    this.backgroundColors[0].addColorStop(1, 'rgba(145, 67, 204, 0.46)'); // show this color at 100%

    this.renderChart(
      {
        labels: this.$props.labels,
        datasets: this.wrapperLabel(this.wrapper(this.$props.datasets)),
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
  methods: {
    wrapper(datasets) {
      return datasets.map((dataset, index) => ({
        ...dataset,
        backgroundColor: this.backgroundColors[index],
      }));
    },
    wrapperLabel(datasets) {
      if (datasets.length != 1) return datasets;
      datasets[0].label = this.$props.label;
      return datasets;
    },
  },
};
</script>
