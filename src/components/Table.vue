<template>
  <b-table
    :data="data"
    :columns="columns"
    :paginated="true"
    :per-page="50"
    :current-page.sync="currentPage"
  ></b-table>
</template>

<script>
export default {
  props: ['tab'],
  data: () => ({
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
    data: [],
    columns: [
      {
        field: 'rank',
        label: '排名',
        width: '60',
        numeric: true,
      },
      {
        field: '名稱',
        label: '角色名稱',
      },
      {
        field: '經驗',
        label: '經驗',
        visible: false,
      },
      {
        field: '身高',
        label: '身高',
        visible: false,
      },
      {
        field: '體重',
        label: '體重',
        visible: false,
      },
      {
        field: '體力',
        label: '體力',
        visible: false,
      },
      {
        field: '金錢',
        label: '金錢',
        visible: false,
      },
      {
        field: '命中',
        label: '命中',
        visible: false,
      },
      {
        field: '傷害',
        label: '傷害',
        visible: false,
      },
      {
        field: '防禦',
        label: '防禦',
        visible: false,
      },
      {
        field: '迴避',
        label: '迴避',
        visible: false,
      },
      {
        field: '法傷',
        label: '法傷',
        visible: false,
      },
      {
        field: '治療',
        label: '治療',
        visible: false,
      },
      {
        field: '料理',
        label: '料理',
        visible: false,
      },
      {
        field: '採集',
        label: '採集',
        visible: false,
      },
      {
        field: '體能',
        label: '體能',
        visible: false,
      },
      {
        field: '偵查',
        label: '偵查',
        visible: false,
      },
      {
        field: '鑑定',
        label: '鑑定',
        visible: false,
      },
      {
        field: '鍛造',
        label: '鍛造',
        visible: false,
      },
      {
        field: '開鎖',
        label: '開鎖',
        visible: false,
      },
      {
        field: '扒竊',
        label: '扒竊',
        visible: false,
      },
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
            let oldColumnIndex = this.$data.tabs.indexOf(oldVal) + 2;
            this.$data.columns[oldColumnIndex].visible = false;
          }

          let chars = this.getFilteredChars(newVal);
          if (chars.length != 0) {
            delay = 100;
          }

          let columnIndex = this.$data.tabs.indexOf(newVal) + 2;
          this.$data.columns[columnIndex].visible = true;
          this.$data.currentPage = 1;

          setTimeout(() => {
            if (chars.length == 0) chars = this.getFilteredChars(newVal);
            this.$data.data = chars;
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
