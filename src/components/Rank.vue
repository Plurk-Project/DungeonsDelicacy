<template>
  <div>
    <b-tabs v-model="activeTab" position="is-centered" class="is-marginless">
      <b-tab-item v-for="tab in tabs" :key="tab" :label="tab"> </b-tab-item>
    </b-tabs>
    <div class="columns is-centered" v-if="getActiveTabName() == '鑑定'">
      <b-tooltip label="生意冷清 趁機偷打廣告 非急件有半價優惠（請備註）">
        <a
          href="https://www.dungeonsdelicacy.com/forum/mei-shi-zhuo-jin/jian-ding-pu-9-deng"
          target="_blank"
        >
          【廣告】美食桌巾 - 艾斯·克林姆 9 級鑑定舖
        </a>
      </b-tooltip>
    </div>
    <div class="is-padding">
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
