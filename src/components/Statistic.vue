<template>
  <div class="is-padding" @click="show()">
    {{ $props.category }}
  </div>
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
          cssClasses: 'has-background-light section',
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

<style lang="scss" scoped>
.is-padding {
  padding: 0.375rem 1rem;
}
</style>
