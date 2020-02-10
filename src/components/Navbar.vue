<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="div" style="vertical-align: bottom;">
        <img src="@/assets/logo.png" alt="Logo" />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <h4 class="title is-4">地下城與美食 非官方 排行榜</h4>
      </b-navbar-item>
      <b-navbar-item>
        <div class="buttons">
          <b-button
            @click="showBrokenChars()"
            type="is-primary"
            size="is-small"
            icon-left="account-remove"
          ></b-button>
          <Cook :foods="foods" />
        </div>
      </b-navbar-item>
      <b-navbar-item>
        <b-dropdown hoverable aria-role="list">
          <button class="button is-primary tag" slot="trigger">
            <span>連結</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            aria-role="listitem"
            :href="link.link"
            target="_blank"
            v-for="(link, index) in links"
            :key="index"
          >
            {{ link.name }}
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-item>
      <b-navbar-item
        href="https://github.com/sheiun/DungeonsDelicacy"
        target="_blank"
      >
        <b-taglist attached>
          <b-tag type="is-light">版本</b-tag>
          <b-tag type="is-primary">{{ $store.getters.appVersion }}</b-tag>
        </b-taglist>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Cook from './Cook.vue';
export default {
  components: {
    Cook,
  },
  data: () => ({
    foods: [],
    links: [
      { name: '官方網站', link: 'https://www.dungeonsdelicacy.com/' },
      { name: '官方噗浪', link: 'https://www.plurk.com/DungeonsDelicacy' },
      { name: '常見問題', link: 'https://www.plurk.com/p/noo6aw' },
      {
        name: 'Q&A 提問',
        link:
          'https://docs.google.com/forms/d/1k83C8vs3mAuXvafc8Fr9lDNubi9hqwIzeIVn859DSRU/viewform?edit_requested=true',
      },
      {
        name: 'Q&A 回應',
        link:
          'https://docs.google.com/spreadsheets/d/1xjGjAFDLLsjFapYId4AOWm95vqdB2lflTEfPabkcXQA/edit#gid=720573555',
      },
      { name: '玩家資源', link: 'https://www.plurk.com/p/nomukf' },
    ],
  }),
  methods: {
    showBrokenChars() {
      const chars = this.$store.getters.brokenChars;
      let message = `<span>第一頁一定要是 <strong>基本資料</strong><br />任何破壞格式的行為都視為格式不符</span>`;
      message += `<br />`;
      message += `<div class="list">${chars
        .map(this.charListWrapper)
        .join('')}</div>`;
      this.$buefy.dialog.alert({
        title: '角卡不符或不全或沒權限',
        message,
      });
    },
    charListWrapper(char) {
      return `<a class="list-item" href="${char.角卡}" target="_blank">${char.報名}</a>`;
    },
  },
};
</script>
<style lang="scss">
.navbar .navbar-brand {
  text-align: center;
  display: block;
  width: 100%;
}

.navbar .navbar-brand > .navbar-item,
.navbar .navbar-brand .navbar-link {
  display: inline-block;
}
</style>
