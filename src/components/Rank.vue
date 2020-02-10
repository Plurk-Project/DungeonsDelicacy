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

export default {
  name: 'rank',
  components: {
    Table,
  },
  data: () => ({
    activeTab: 0,
    tabs: [
      '經驗',
      '身高',
      '體重',
      '體力',
      '金錢',
      '命中',
      '傷害',
      '防禦',
      '迴避',
      '法傷',
      '治療',
      '料理',
      '採集',
      '體能',
      '偵查',
      '鑑定',
      '鍛造',
      '開鎖',
      '扒竊',
    ],
  }),
  methods: {
    getActiveTabName() {
      return this.$data.tabs[this.$data.activeTab];
    },
  },
};
</script>
