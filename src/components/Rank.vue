<template>
  <div>
    <section>
      <b-tabs v-model="activeTab" position="is-centered">
        <b-tab-item v-for="tab in tabs" :key="tab" :label="tab"> </b-tab-item>
      </b-tabs>
    </section>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <Table :tab="getActiveTabName()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from './Table.vue';
import { attrs } from '../lib/data';

export default {
  name: 'rank',
  components: {
    Table,
  },
  data: () => ({
    activeTab: 0,
    tabs: attrs,
  }),
  methods: {
    getActiveTabName() {
      return this.tabs[this.activeTab];
    },
  },
};
</script>
