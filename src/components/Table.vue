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
const tabs = [
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
];

const getField = (item) => ({
  field: item,
  label: item,
  numeric: true,
  visible: false,
});

export default {
  props: ['tab'],
  data: () => ({
    tabs,
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
        renderHtml: true,
      },
      ...tabs.map(getField),
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

          let chars = this.getHTMLFilteredChars(newVal);
          if (chars.length != 0) {
            delay = 100;
          }

          let columnIndex = this.$data.tabs.indexOf(newVal) + 2;
          this.$data.columns[columnIndex].visible = true;
          this.$data.currentPage = 1;

          setTimeout(() => {
            if (chars.length == 0) chars = this.getHTMLFilteredChars(newVal);
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
    getHTMLFilteredChars(category) {
      let chars = this.getFilteredChars(category);
      chars.map((char) => {
        let name = char.名稱;
        let link = char.角卡;
        char.名稱 = `<a href="${link}" target="_blank">${name}</a>`;
        return char;
      });
      return chars;
    },
    open() {
      const loadingComponent = this.$buefy.loading.open();
      return loadingComponent;
    },
  },
};
</script>
