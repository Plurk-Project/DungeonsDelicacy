<template>
  <b-button
    @click="show()"
    type="is-primary"
    size="is-small"
    icon-left="account-group"
  ></b-button>
</template>

<script>
import RadarChart from './RadarChart.vue';
import { battleAttrs, lifeAttrs, weaponAttack } from '../lib/data';

const TextForm = {
  props: ['chars'],
  data: () => ({
    texts: [],
  }),
  mounted() {
    this.texts = this.$props.chars.map(this.getFormatedText);
  },
  methods: {
    getFormatedText(char) {
      return `${char.名稱.trim().replace(/\n/, ' ')}（${char.武器}｜${
        char.種族
      }）HP ${char.血量}
物攻：${weaponAttack[char.武器]}+${char.傷害} 命中：D6+${char.命中}
迴避：${char.迴避} 防禦：${char.防禦} 法傷：${char.法傷} 治療：${char.治療}
－
料理：${char.料理} 採集：${char.採集} 體能：${char.體能} 偵查：${char.偵查}
鑑定：${char.鑑定} 鍛造：${char.鍛造} 開鎖：${char.開鎖} 扒竊：${char.扒竊}`;
    },
    onCopy(e) {
      this.$buefy.snackbar.open({
        duration: 3000,
        message: `複製 ${e.text.split('（')[0]} 的資訊成功！`,
        position: 'is-bottom',
        type: 'is-success',
      });
    },
    onError(e) {
      this.$buefy.snackbar.open({
        duration: 3000,
        message: '複製失敗！',
        position: 'is-bottom',
        type: 'is-danger',
      });
    },
  },
  template: `
  <div class="modal-card" style="width: auto;">
    <section class="modal-card-body">
      <div class="level" v-for="(text, index) in texts">
        <div>
          <pre>{{ text }}</pre>
        </div>
        <div class="level-right">
          <b-button
            icon-left="clipboard-text"
            class="button is-primary"
            v-clipboard:copy="texts[index]"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            >
            複製
          </b-button>
        </div>
      </div>
    </section>
  </div>`,
};

const ModalForm = {
  props: ['chars'],
  data: () => ({
    names: Array.from({ length: 6 }, () => ''),
    selecteds: Array.from({ length: 6 }, () => null),
    playerCount: 2,
    focusIndex: 0,
  }),
  computed: {
    filteredChars() {
      return this.chars.filter(
        (char) => char.名稱.indexOf(this.names[this.focusIndex]) >= 0,
      );
    },
  },
  methods: {
    getSelectedChars() {
      const selectedChars = this.selecteds.slice(0, this.playerCount);
      if (!selectedChars.every(Boolean)) {
        this.$buefy.snackbar.open({
          duration: 3000,
          message: '尚有空位還沒選擇成員',
          position: 'is-bottom',
          type: 'is-warning',
        });
        return null;
      }
      return selectedChars;
    },
    showChart() {
      const selectedChars = this.getSelectedChars();
      if (!selectedChars) return;

      this.$buefy.modal.open({
        parent: this,
        props: {
          labels: battleAttrs.concat(lifeAttrs),
          chars: selectedChars,
          cssClasses: 'has-background-light section',
        },
        component: RadarChart,
      });
    },
    showText() {
      const selectedChars = this.getSelectedChars();
      if (!selectedChars) return;

      this.$buefy.modal.open({
        parent: this,
        props: {
          chars: selectedChars,
        },
        component: TextForm,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
  template: `
  <div class="modal-card" style="width: auto;">
    <header class="modal-card-head">
      <p class="modal-card-title">戰力分析</p>
    </header>
    <section class="modal-card-body">
      <b-field label="玩家人數">
        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field :label="'隊員 ' + n" v-for="(n, index) in playerCount" :key="index">
        <b-autocomplete
          v-model="names[index]"
          :data="filteredChars"
          icon="account"
          field="名稱"
          @focus="focusIndex = index"
          open-on-focus
          @select="(option) => (selecteds[index] = option)"
        >
          <template slot="empty">找不到角色</template>
        </b-autocomplete>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button icon-left="chart-line" class="button is-primary" @click="showChart()">
        圖
      </b-button>
      <b-button icon-left="clipboard-text" class="button is-primary" @click="showText()">
        文
      </b-button>
    </footer>
  </div>
  `,
};

export default {
  methods: {
    show() {
      this.$buefy.modal.open({
        parent: this,
        props: { chars: this.$store.state.chars },
        component: ModalForm,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>
