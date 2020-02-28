<template>
  <div class="is-padding" @click="show()">
    {{ $props.category.name }}
  </div>
</template>

<script>
import PieChart from './PieChart.vue';
import BarChart from './BarChart.vue';

import { battleAttrs, lifeAttrs } from '../lib/data';

export default {
  props: ['category'],
  data: () => ({
    labels: [],
    chartData: [],
    datasets: [],
    component: null,
  }),
  methods: {
    show() {
      // XXX: Not sure why to check labels and data

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
        if (['戰鬥', '生活'].includes(this.$props.category.name)) {
          let attrs;
          if ('戰鬥' == this.$props.category.name) attrs = battleAttrs;
          if ('生活' == this.$props.category.name) attrs = lifeAttrs;
          let max = this.getMax(this.$store.state.chars, attrs);
          this.datasets;
        } else {
          this.datasets[0] = this.getDataset(
            this.$store.state.chars,
            this.$props.category.name,
          );
        }
        this.labels = this.getLabels(
          this.$store.state.chars,
          this.$props.category.name,
        );
      }
      this.$buefy.modal.open({
        parent: this,
        props: {
          label: this.$props.category.name,
          labels: this.labels,
          chartData: this.chartData,
          datasets: this.datasets,
          cssClasses: 'has-background-light section',
        },
        component: this.component,
      });
    },
    getDataset(chars, key, hasInterval = true) {
      let max = Math.max(...chars.map((x) => x[key]).filter(Number));
      let min = Math.min(...chars.map((x) => x[key]).filter(Number));
      let dataset = [];

      if (hasInterval) {
        let interval = Math.ceil((max - min) / 10);
      }

      chars.forEach((x) => {
        dataset[Math.floor((x[key] - min) / interval)] += 1;
      });

      return dataset;
    },
    getMax(chars, attrs) {
      return (max = Math.max(
        ...attrs.map((attr) =>
          Math.max(...chars.map((x) => x[attr]).filter(Number)),
        ),
      ));
    },
    getLabels(chars, key) {
      let labels = [];
      let max;
      let min;
      if (key != '戰鬥' && key != '生活') {
        max = Math.max(...chars.map((x) => x[key]).filter(Number));
        min = Math.min(...chars.map((x) => x[key]).filter(Number));
        for (let i = 0; i < 10; i++) {
          let cMin = interval * i + min;
          let cMax = interval * (i + 1) + min;
          if (cMax > max) cMax = max;
          labels[i] = `${interval * i + min} ~ ${interval * (i + 1) + min - 1}`;
        }
      } else {
        let keys = [];
        if (key == '戰鬥') keys = battleAttrs;
        if (key == '生活') keys = lifeAttrs;
        max = Math.max(
          ...keys.map((key) =>
            Math.max(...chars.map((x) => x[key]).filter(Number)),
          ),
        );
        min = -2;
        for (let i = min; i <= max; i++) {
          labels.push(String(i));
        }
      }

      return labels;
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
