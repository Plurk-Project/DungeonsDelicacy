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
              'rgba(51, 102, 204, .8)',
              'rgba(220, 57, 18, .8)',
              'rgba(255, 153, 0, .8)',
              'rgba(16, 150, 24, .8)',
              'rgba(153, 0, 153, .8)',
              'rgba(0, 153, 198, .8)',
              'rgba(221, 68, 119, .8)',
              'rgba(102, 170, 0, .8)',
              'rgba(184, 46, 46, .8)',
              'rgba(49, 99, 149, .8)',
              'rgba(153, 68, 153, .8)',
              'rgba(34, 170, 153, .8)',
              'rgba(170, 170, 17, .8)',
              'rgba(102, 51, 204, .8)',
              'rgba(230, 115, 0, .8)',
              'rgba(139, 7, 7, .8)',
              'rgba(101, 16, 103, .8)',
              'rgba(50, 146, 98, .8)',
              'rgba(85, 116, 166, .8)',
              'rgba(59, 62, 172, .8)',
              'rgba(183, 115, 34, .8)',
              'rgba(22, 214, 32, .8)',
              'rgba(185, 19, 131, .8)',
              'rgba(244, 53, 158, .8)',
              'rgba(156, 89, 53, .8)',
              'rgba(169, 196, 19, .8)',
              'rgba(42, 119, 141, .8)',
              'rgba(102, 141, 28, .8)',
              'rgba(190, 164, 19, .8)',
              'rgba(12, 89, 34, .8)',
              'rgba(116, 52, 17, .8)',
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
