import Vue from 'vue';
import Buefy from 'buefy';
import Vuex from 'vuex';

Vue.use(Buefy);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || '0.1.0',
    // chars: { by title }
    chars: [],
    brokenChars: [],
  },
  getters: {
    appVersion: (state) => state.packageVersion,
    getBrokenChars(state) {
      return state.brokenChars.map((char) => char.名稱);
    },
  },
  mutations: {
    /**
     *
     * @param {Array} data from spreadsheet
     */
    setChars(state, { data }) {
      const header = data.shift();

      let filteredData = data.filter((list) =>
        list.every((x) => {
          return (!isNaN(parseInt(x)) || Boolean(x)) && x != 'undefined';
        }),
      );

      const brokenCharsData = data.filter((list) => list[0] == '壞');
      const brokenChars = brokenCharsData.map((list) => {
        let char = {};
        for (let i = 0; i < header.length; i++) {
          char[header[i]] = list[i];
        }
        return char;
      });
      this.state.brokenChars = brokenChars;

      const chars = filteredData.map((list) => {
        let char = {};
        for (let i = 0; i < header.length; i++) {
          char[header[i]] = list[i];
        }
        return char;
      });

      this.state.chars = chars;
    },
  },
  actions: {},
  modules: {},
});
