<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item>
        <img src="@/assets/logo.png" alt="Logo" />
      </b-navbar-item>
      <b-navbar-item>
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
        <b-taglist attached>
          <b-tag type="is-dark">版本</b-tag>
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
  }),
  methods: {
    showBrokenChars() {
      const chars = this.$store.getters.getBrokenChars;
      let message = `<span>第一頁一定要是 <strong>基本資料</strong><br />任何破壞格式的行為都視為格式不符</span>`;
      message += `<br />`;
      message += `<div class="list">${chars
        .map(this.itemWrapper)
        .join('')}</div>`;
      this.$buefy.dialog.alert({
        title: '角卡格式不符或沒有權限名單',
        message,
      });
    },
    itemWrapper(item) {
      return `<a class="list-item">${item}</a>`;
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
