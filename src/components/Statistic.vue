<template>
  <b-button
    @click="show()"
    type="is-primary"
    size="is-small"
    :icon-left="$props.icon"
  >
  </b-button>
</template>

<script>
import PieChart from './PieChart.vue';

export default {
  components: {},
  props: ['category', 'icon'],
  data: () => ({
    labels: [],
    chartData: [],
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
        let g = this.groupBy(this.$store.state.chars, this.$props.category);
        this.labels = Object.keys(g);
        this.chartData = Object.entries(g).map((x) => x[1].length);
      }
      this.$buefy.modal.open({
        parent: this,
        props: {
          labels: this.labels,
          chartData: this.chartData,
          cssClasses: 'has-background-light',
        },
        component: PieChart,
      });
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
