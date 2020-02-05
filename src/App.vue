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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
