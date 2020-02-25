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

export default {
  name: 'app',
  components: {
    Navbar,
    Rank,
    Footer,
  },
  beforeMount() {
    const loading = this.open();
    fetch(
      'https://script.google.com/macros/s/AKfycbzbmSK_x_cGD7QonZ-yj5USYb-XrP8RR4RVwGXdOK8G1yX_52E/exec',
      { method: 'POST', body: JSON.stringify({ token: 'gogoddy' }) },
    )
      .then((res) => res.json())
      .then((res) => {
        let message = '已更新成第 2 版的角卡 且改善程式即時連動！';
        let type = 'is-info';
        if (res.msg == 'ok') {
          this.$store.commit('setChars', { data: res.data });
        } else {
          message = '讀取失敗請稍後再試！';
          type = 'is-danger';
        }
        loading.close();

        Snackbar.open({
          duration: 3000,
          message,
          position: 'is-top',
          type,
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
$twitter: #0a7d98;
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

.is-padding {
  padding: 0.375rem 1rem;
}
</style>
