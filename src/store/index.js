import Vue from 'vue';
import Buefy from 'buefy';
import Vuex from 'vuex';
import VueClipboard from 'vue-clipboard2';

Vue.use(Buefy);
Vue.use(Vuex);
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || '?',
    // chars: { by title }
    chars: [],
    brokenChars: [],
  },
  getters: {
    appVersion: (state) => state.packageVersion,
    brokenChars: (state) => state.brokenChars,
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

      const brokenCharsData = data.filter((list) => list[0] == '異常');
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

      chars.map((char) => {
        let name = char.名稱;
        let link = char.角卡;
        let plurk = char.噗浪;
        char.角色名稱 = `<div class="level is-paddingless">
          <div class="level-left">
            <a href="${link}" target="_blank">${name}</a>
          </div>
          <div class="level-right">
            <a href="${plurk}" target="_blank"><span class="icon is-small is-primary"><i class="mdi mdi-account-box"></i></span></a>
          </div>
        </div>`;
        return char;
      });

      this.state.chars = chars;
    },
  },
  actions: {},
  modules: {},
});
