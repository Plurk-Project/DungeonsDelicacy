<template>
  <b-table
    :data="currentChars"
    :columns="columns"
    :paginated="true"
    :per-page="50"
    :current-page.sync="currentPage"
  ></b-table>
</template>

<script>
import { attrs } from '../lib/data';

const getField = (item) => ({
  field: item,
  label: item,
  numeric: true,
  visible: false,
});

export default {
  props: ['tab'],
  data: () => ({
    tabs: attrs,
    currentChars: [],
    columns: [
      {
        field: 'rank',
        label: '排名',
        width: '60',
        numeric: true,
      },
      {
        field: '角色名稱',
        label: '角色名稱',
        renderHtml: true,
      },
      ...attrs.map(getField),
    ],
    currentPage: 1,
  }),
  watch: {
    tab: {
      immediate: true,
      handler(newVal, oldVal) {
        const loading = this.$buefy.loading.open();
        setTimeout(() => {
          if (oldVal !== undefined) {
            let oldColumnIndex = this.tabs.indexOf(oldVal) + 2;
            this.columns[oldColumnIndex].visible = false;
          }

          let columnIndex = this.tabs.indexOf(newVal) + 2;
          this.columns[columnIndex].visible = true;
          this.currentPage = 1;

          this.untilGetFilteredChars(newVal, loading);
        }, 100);
      },
    },
  },
  computed: {
    chars() {
      return this.$store.state.chars;
    },
  },
  methods: {
    getFilteredChars(category) {
      let chars = this.chars;
      // filter
      chars = chars.filter((char) => !isNaN(parseInt(char[category])));
      // sort
      chars = chars.sort((a, b) => b[category] - a[category]);
      // add index
      for (let i = 0; i < chars.length; i++) {
        chars[i].rank = i + 1;
      }
      return chars;
    },
    untilGetFilteredChars(val, loading) {
      setTimeout(() => {
        let chars = this.getFilteredChars(val);
        if (chars.length !== 0) {
          this.currentChars = chars;
          return loading.close();
        }
        this.untilGetFilteredChars(val, loading);
      }, 500);
    },
  },
};
</script>
