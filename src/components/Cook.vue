<template>
  <b-button
    @click="show()"
    type="is-primary"
    size="is-small"
    icon-left="pot-mix"
  ></b-button>
</template>

<script>
import { cook } from '../lib/cook';

const ModalForm = {
  props: ['foods'],
  data: () => ({
    foodIndex: 0,
    level: 1,
  }),
  template: `
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">料理占卜</p>
    </header>
    <section class="modal-card-body">
      <b-field label="料理技能等級">
        <b-numberinput icon="pot-mix" min="1" v-model="level"></b-numberinput>
      </b-field>

      <b-field label="食材">
        <b-select
          placeholder="選擇一個食材"
          icon="food-apple"
          v-model="foodIndex"
          expanded
          required
        >
          <option v-for="(food, index) in foods" :value="index" :key="index">
            {{ food.name }}｜{{ food.hard }}｜{{ food.exp }}｜{{ food.spicy }}
          </option>
        </b-select>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button
        @click="$emit('show-cook', {level, food: foods[foodIndex]})"
        class="button is-primary"
      >
        占卜
      </button>
    </footer>
  </div>`,
};

export default {
  data: () => ({
    foods: [],
  }),
  methods: {
    show() {
      if (this.foods.length == 0) {
        const loading = this.$buefy.loading.open();
        this.fetchAllFoods().then(() => {
          setTimeout(() => loading.close(), 100);
          this.showCookMenu();
        });
      } else {
        this.showCookMenu();
      }
    },
    showCookMenu() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        trapFocus: true,
        props: {
          foods: this.foods,
        },
        events: {
          'show-cook': (value) => {
            this.showCook(value.level, value.food);
          },
        },
      });
    },
    fetchAllFoods() {
      return fetch(
        `https://script.google.com/macros/s/AKfycbz9Wdl3svakmlVhDPCeoPvLbb0GGDP3d41zcKcM8mNntgJW44t3/exec`,
      )
        .then((res) => res.json())
        .then((obj) => {
          this.foods = obj.data.filter((x) => x.name != '??');
        });
    },

    showCook(level, food) {
      this.$buefy.dialog.alert({
        title: '占卜結果',
        message: cook(level, food.hard, food.exp),
        confirmText: '讚',
      });
    },
  },
};
</script>
