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

const ModalForm = {
  props: ['chars'],
  data: () => ({
    names: Array.from({ length: 6 }, () => ''),
    selecteds: Array.from({ length: 6 }, () => null),
    playerCount: 2,
    focusIndex: 0,
  }),
  computed: {
    filteredCharsName() {
      return this.chars
        .filter((char) => char.名稱.indexOf(this.names[this.focusIndex]) >= 0)
        .map((char) => char.名稱);
    },
  },
  methods: {
    showResult() {
      if (!this.selecteds.slice(0, this.playerCount).every(Boolean)) {
        this.$buefy.snackbar.open({
          duration: 3000,
          message: '尚有空位還沒選擇成員',
          position: 'is-bottom',
          type: 'is-warning',
        });
        return;
      }

      // this.$buefy.modal.open({
      //   parent: this,
      //   props: {
      //     labels: this.labels,
      //     chartData: this.chartData,
      //     cssClasses: 'has-background-light section',
      //   },
      //   component: RadarChart,
      // });
    },
  },
  template: `
  <div class="modal-card" style="width: auto;">
    <header class="modal-card-head">
      <p class="modal-card-title">組隊資訊</p>
    </header>
    <section class="modal-card-body">
      <b-field label="玩家人數">
        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field :label="'隊員 ' + n" v-for="(n, index) in playerCount" :key="index">
        <b-autocomplete
          v-model="names[index]"
          :data="filteredCharsName"
          icon="account"
          @focus="focusIndex = index"
          open-on-focus
          @select="(option) => (selecteds[index] = option)"
        >
          <template slot="empty">找不到角色</template>
        </b-autocomplete>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" @click="showResult()">
        查詢
      </button>
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
    showChart() {
      this.$buefy.modal.open({
        parent: this,
        props: {
          cssClasses: 'has-background-light section',
        },
        component: RadarChart,
      });
    },
  },
};
</script>
