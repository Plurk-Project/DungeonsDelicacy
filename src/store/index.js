import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Vuex from 'vuex';

Vue.use(Buefy);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // chars: { by title }
    chars: [],
  },
  mutations: {
    /**
     *
     * @param {Array} data from spreadsheet
     */
    setChars(state, { data }) {
      const header = data.shift();

      // filtering data
      data = data.filter((list) =>
        list.every((x) => {
          return (!isNaN(parseInt(x)) || Boolean(x)) && x != 'undefined';
        }),
      );

      const chars = data.map((list) => {
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
