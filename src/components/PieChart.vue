<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['labels', 'chartData'],
  mounted() {
    this.renderChart(
      {
        labels: this.$props.labels,
        datasets: [
          {
            backgroundColor: [
              'rgba(34, 61, 144, .8)',
              'rgba(39, 81, 135, .8)',
              'rgba(124, 203, 238, .8)',
              'rgba(90, 187, 222, .8)',
              'rgba(31, 183, 183, .8)',
              'rgba(243, 190, 61, .8)',
              'rgba(184, 65, 20, .8)',
              'rgba(138, 53, 38, .8)',
              'rgba(227, 65, 80, .8)',
              'rgba(154, 37, 53, .8)',
              'rgba(34, 61, 144, .8)',
              'rgba(39, 81, 135, .8)',
              'rgba(124, 203, 238, .8)',
              'rgba(90, 187, 222, .8)',
              'rgba(31, 183, 183, .8)',
            ],
            borderWidth: 0,
            data: this.$props.chartData,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
};
</script>
