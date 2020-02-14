<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: ['labels', 'chars'],
  methods: {
    charWrapper(char) {
      const data = this.$props.labels.map((label) => char[label]);
      const range = 240;
      const r = Math.floor(Math.random() * range),
        g = Math.floor(Math.random() * range),
        b = Math.floor(Math.random() * range);
      return {
        label: char.名稱,
        backgroundColor: `rgba(${r}, ${g}, ${b}, .3)`,
        borderColor: `rgba(${r}, ${g}, ${b}, .8)`,
        borderWidth: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#555',
        pointHoverBackgroundColor: '#654236',
        data,
      };
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: this.$props.labels,
        datasets: this.$props.chars.map(this.charWrapper),
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
};
</script>
