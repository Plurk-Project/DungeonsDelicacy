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
          <Party />
          <Cook :foods="foods" />
          <Battle />
        </div>
      </b-navbar-item>
      <b-navbar-item>
        <b-dropdown hoverable aria-role="list">
          <button class="button is-primary tag" slot="trigger">
            <span>統計</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            paddingless
            aria-role="listitem"
            v-for="(category, index) in statistics"
            :key="index"
          >
            <Statistic :category="category" />
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-item>
      <b-navbar-item>
        <b-dropdown hoverable aria-role="list">
          <button class="button is-primary tag" slot="trigger">
            <span>圖鑑</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            aria-role="listitem"
            :href="link.link"
            target="_blank"
            v-for="(link, index) in handbooks"
            :key="index"
          >
            {{ link.name }}
          </b-dropdown-item>
        </b-dropdown>
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
        href="https://github.com/Plurk-Project/DungeonsDelicacy"
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
import Battle from './Battle.vue';
import Statistic from './Statistic.vue';
import Party from './Party.vue';

import { attrs } from '../lib/data';

const icon = `<span class="icon is-small is-primary">
                <i class="mdi mdi-link-variant"></i>
              </span>`;

export default {
  components: {
    Cook,
    Battle,
    Statistic,
    Party,
  },
  data: () => ({
    foods: [],
    statistics: [
      { name: '階級', type: 'PieChart' },
      { name: '性別', type: 'PieChart' },
      { name: '武器', type: 'PieChart' },
      { name: '種族', type: 'PieChart' },
      { name: '信仰', type: 'PieChart' },
      { name: '陣營', type: 'PieChart' },
      { name: '公會', type: 'PieChart' },
      { name: '進階公會', type: 'PieChart' },
      ...attrs.map((attr) => ({ name: attr, type: 'BarChart' })),
    ],
    links: [
      { name: '官方網站', link: 'https://www.dungeonsdelicacy.com/' },
      { name: '官方噗浪', link: 'https://www.plurk.com/DungeonsDelicacy' },
      { name: '鍛造噗 I', link: 'https://www.plurk.com/p/noqcmc' },
      { name: '鍛造噗 II', link: 'https://www.plurk.com/p/npq78c' },
      { name: '鑑定噗 I', link: 'https://www.plurk.com/p/norn6m' },
      { name: '鑑定噗 II', link: 'https://www.plurk.com/p/npq73e' },
      { name: '地下城二三事', link: 'https://www.plurk.com/p/nojfla' },
      {
        name: '戰鬥教學',
        link:
          'https://docs.google.com/document/d/1tNUQxQw2V_Hh76NRGGio0HKTPXWQyzGAzrjx6JGJXB4/edit',
      },
      {
        name: '報名列表',
        link:
          'https://docs.google.com/spreadsheets/d/1F1lY69prHMCPtEYIuH2TZP7EP41_f-uyNpGW0NP5AAg/edit#gid=0',
      },
      { name: '常見問題', link: 'https://www.plurk.com/p/noo6aw' },
      {
        name: '新 Q&A',
        link: 'https://www.dungeonsdelicacy.com/forum/you-xi-q-a',
      },
      {
        name: '舊 Q&A',
        link:
          'https://docs.google.com/spreadsheets/d/1xjGjAFDLLsjFapYId4AOWm95vqdB2lflTEfPabkcXQA/edit#gid=720573555',
      },
      { name: '玩家資源', link: 'https://www.plurk.com/p/nomukf' },
    ],
    handbooks: [
      {
        name: '怪物',
        link:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vSYayjZCWCLraxf_NpmTR5q6ff5j6pjE0zmzo8iqHRklWq9L--8xoBCiuvsMBNUHQtX4dwUSdd0ngH2/pubhtml?gid=765368756&single=true',
      },
      {
        name: '素材',
        link:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVFBEglpAusAEZ7MF4uHn-OiTMhqg2Ou25XEkqQcVbfxwN8akoOPg7C_xyblNYpMyi_rtXQrN3Nskm/pubhtml',
      },
      {
        name: '食材',
        link:
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFBt1LNEEvUHwoGb6E3w0_QvnQ-76L_ixrIX1igoY8_MFi53-ji0VinnWXjTz36-oKq3ZTdh1ljYLE/pubhtml',
      },
    ],
  }),
  methods: {
    showBrokenChars() {
      const chars = this.$store.getters.brokenChars;
      let message = `<span>短網址會導致程式抓取失敗 將在未來進行手動修正<br />尚未更新成<strong>新角卡</strong>的玩家將不顯示在此</span>`;
      message += `<br />`;
      message += `<div class="list">${chars
        .map(this.charListWrapper)
        .join('')}</div>`;
      this.$buefy.dialog.alert({
        title: '沒權限或為短網址',
        message,
      });
    },
    charListWrapper(char) {
      return `<a class="list-item" href="${char.角卡}" target="_blank">${char.報名}${icon}</a>`;
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
