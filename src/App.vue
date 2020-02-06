<template>
  <div id="app">
    <Navbar />
    <Rank />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Rank from './components/Rank.vue';
import Footer from './components/Footer.vue';
import { SnackbarProgrammatic as Snackbar } from 'buefy';
import { NotificationProgrammatic as Notification } from 'buefy';

export default {
  name: 'app',
  components: {
    Navbar,
    Rank,
    Footer,
  },
  created() {
    const loading = this.open();
    fetch(
      'https://script.google.com/macros/s/AKfycbz_cw2tsupOmx-f-288ajIx3_rfOGqH9_UEQYZ52LRgS551k1Q/exec',
      { method: 'POST', body: JSON.stringify({ token: 'gogoddy' }) },
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.msg == 'ok') {
          this.$store.commit('setChars', { data: res.data });
        }
        loading.close();

        Snackbar.open({
          duration: 3000,
          message: '每 8 小時自動更新一次',
          position: 'is-top',
          type: 'is-info',
        });

        Notification.open({
          indefinite: true,
          type: 'is-info',
          message:
            '如果你找不到你的 <em>角色名稱</em><br />那可能是你的 角卡格式 <em>不正確</em> 或沒有開啟權限<br />請按照官方規格角卡並請勿更動基本資料頁面的儲存格',
        });
      });
  },
  methods: {
    open() {
      const loadingComponent = this.$buefy.loading.open();
      return loadingComponent;
    },
  },
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

$primary: #654236;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
  'twitter': (
    $twitter,
    $twitter-invert,
  ),
);

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import '~bulma';
@import '~buefy/src/scss/buefy';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
