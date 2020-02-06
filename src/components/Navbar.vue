<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item>
        <img src="@/assets/logo.png" alt="地下城與美食" />
      </b-navbar-item>
      <b-navbar-item>
        <h1><strong>地下城與美食 非官方 排行榜</strong></h1>
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
      this.$buefy.dialog.alert({
        title: '角卡格式不符或沒有權限名單',
        message: `<div class="list">${chars
          .map(this.itemWrapper)
          .join('')}</div>`,
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
