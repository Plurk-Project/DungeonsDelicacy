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
        let delay = 1000;
        if (oldVal === undefined) {
          delay = 3000;
        }
        const loading = this.open();
        setTimeout(() => {
          if (oldVal != undefined) {
            let oldColumnIndex = this.tabs.indexOf(oldVal) + 2;
            this.columns[oldColumnIndex].visible = false;
          }

          let chars = this.getFilteredChars(newVal);
          if (chars.length != 0) {
            delay = 100;
          }

          let columnIndex = this.tabs.indexOf(newVal) + 2;
          this.columns[columnIndex].visible = true;
          this.currentPage = 1;

          setTimeout(() => {
            if (chars.length == 0) chars = this.getFilteredChars(newVal);
            this.currentChars = chars;
            loading.close();
          }, delay);
        }, delay);
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
    open() {
      const loadingComponent = this.$buefy.loading.open();
      return loadingComponent;
    },
  },
};
</script>
