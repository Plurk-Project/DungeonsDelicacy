<template>
  <b-button
    @click="show()"
    type="is-primary"
    size="is-small"
    icon-left="cash-usd"
  ></b-button>
</template>

<script>
import MaterialCalculator from './ＭaterialCalculator.vue';

export default {
  methods: {
    show() {
      this.$buefy.modal.open({
        parent: this,
        component: MaterialCalculator,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>
