<template>
  <div class="is-padding" @click="show()">
    {{ $props.category.name }}
  </div>
</template>

<script>
import PieChart from './PieChart.vue';
import BarChart from './BarChart.vue';

export default {
  props: ['category'],
  data: () => ({
    labels: [],
    chartData: [],
    component: null,
  }),
  methods: {
    show() {
      // check labels and data
      if (
        this.labels.length == 0 ||
        this.chartData.length == 0 ||
        this.labels.length != this.chartData.length
      ) {
        // load data
        if (this.$props.category.type == 'PieChart') {
          this.component = PieChart;
          let g = this.groupBy(
            this.$store.state.chars,
            this.$props.category.name,
          );
          this.labels = Object.keys(g);
          this.chartData = Object.entries(g).map((x) => x[1].length);
        } else if (this.$props.category.type == 'BarChart') {
          this.component = BarChart;
          let data = this.getChartData(
            this.$store.state.chars,
            this.$props.category.name,
          );
          this.labels = data.labels;
          this.chartData = data.chartData;
        }
      }
      this.$buefy.modal.open({
        parent: this,
        props: {
          label: this.$props.category.name,
          labels: this.labels,
          chartData: this.chartData,
          cssClasses: 'has-background-light section',
        },
        component: this.component,
      });
    },
    getChartData(xs, key, groupSize = 10) {
      let max = Math.max(...xs.map((x) => x[key]).filter(Number.isInteger));
      let min = Math.min(...xs.map((x) => x[key]).filter(Number.isInteger));

      let labels = [];
      let chartData = Array(groupSize).fill(0);

      let interval = Math.ceil((max - min) / groupSize);
      // get labels
      for (let i = 0; i < groupSize; i++) {
        let cMin = interval * i + min;
        let cMax = interval * (i + 1) + min;
        if (cMax > max) cMax = max;
        labels[i] = `${interval * i + min} ~ ${interval * (i + 1) + min - 1}`;
      }

      xs.forEach((x) => {
        chartData[Math.floor((x[key] - min) / interval)] += 1;
      });

      return { labels, chartData };
    },
    groupBy(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
  },
};
</script>
