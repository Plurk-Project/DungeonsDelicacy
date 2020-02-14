<template>
  <b-button
    @click="show()"
    type="is-primary"
    size="is-small"
    icon-left="sword-cross"
  ></b-button>
</template>

<script>
import { SnackbarProgrammatic as Snackbar } from 'buefy';
import { createEntity, calcWinRate } from '../lib/battle';

const attrs = [
  { name: '血量', variable: 'hp' },
  { name: '攻擊', variable: 'attack' },
  { name: '防禦', variable: 'defense' },
  { name: '命中', variable: 'hit' },
  { name: '閃避', variable: 'dodge' },
];

const entity = attrs
  .map((attr) => ({ [attr.variable]: 0 }))
  .reduce((a, b) => Object.assign(a, b), {});

const chars = [{}, {}, {}, {}, {}, {}].map((e) => Object.assign({}, entity));
const monsters = JSON.parse(JSON.stringify(chars));

const ModalForm = {
  data: () => ({
    monsterCount: 1,
    playerCount: 2,
    attrs,
    chars,
    monsters,
  }),
  mounted() {
    Snackbar.open({
      duration: 5000,
      message:
        '攻擊的部分尚未針對各職業的基礎骰做處理 目前直接把骰面除 2 加入攻擊中即可',
      position: 'is-top',
      type: 'is-info',
    });
  },
  methods: {
    showResult() {
      let message;
      let type = 'is-primary';
      try {
        let winRate = calcWinRate(
          this.chars.slice(0, this.charCount),
          this.monsters.slice(0, this.monsterCount),
        );
        message = `勝率: ${Math.round(winRate * 100, 2) + '%'}`;
      } catch (error) {
        type = 'is-danger';
        message = `發生了一些錯誤 這個程式還在 Beta 版<br />是通過數學統計模型建出來的<br />至少要有一個人的攻擊大於敵方防禦<br />且血量不能為 0<br /><code>${error}</code>`;
      }
      this.$buefy.dialog.alert({
        title: '占卜結果',
        message,
        type,
        confirmText: '讚',
      });
    },
  },
  template: `
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">戰鬥占卜</p>
    </header>
    <section class="modal-card-body">
      <b-field label="玩家人數">
        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field grouped v-for="(n, index) in playerCount" :key="'p' + index">
        <b-field
          :label="attr.name"
          v-for="attr in attrs"
          :key="attr.variable"
          expanded
        >
          <b-input type="number" value="0" v-model.number="chars[index][attr.variable]" required></b-input>
        </b-field>
      </b-field>
      <b-field label="怪物數量">
        <b-numberinput v-model="monsterCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field grouped v-for="(n, index) in monsterCount" :key="'m' + index">
        <b-field
          :label="attr.name"
          v-for="attr in attrs"
          :key="attr.variable"
          expanded
        >
          <b-input type="number" value="0" v-model.number="monsters[index][attr.variable]" required></b-input>
        </b-field>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" @click="showResult()">
        占卜
      </button>
    </footer>
  </div>`,
};

export default {
  methods: {
    show() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>
