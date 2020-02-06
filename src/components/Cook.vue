<template>
  <b-button
    @click="cardModal()"
    type="is-primary"
    size="is-small"
    icon-left="pot-mix"
  ></b-button>
</template>

<script>
const ModalForm = {
  props: ['foods'],
  data: () => ({
    food: '',
    level: 1,
  }),
  template: `
            <form v-on:submit.prevent>
              <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">料理占卜</p>
                </header>
                <section class="modal-card-body">
                  <b-field label="料理技能等級">
                      <b-input
                          v-model="level"
                          type="number"
                          :value="level"
                          placeholder="你的料理等級"
                          min="1"
                          required>
                      </b-input>
                  </b-field>

                  <b-field label="食材">
                    <b-select placeholder="選擇一個食材" v-model="food" required>
                      <option
                          v-for="food in foods"
                          :value="food"
                          :key="food">
                          {{ food }}
                      </option>
                    </b-select>
                  </b-field>
                </section>
                <footer class="modal-card-foot">
                  <button @click="$emit('show-cook', {level, food})" class="button is-primary">占卜</button>
                </footer>
              </div>
            </form>
        `,
};

export default {
  data: () => ({
    foods: [],
  }),
  methods: {
    open() {
      const loadingComponent = this.$buefy.loading.open();
      return loadingComponent;
    },

    cardModal() {
      const loading = this.open();
      this.getAllFoods().then(() => {
        setTimeout(() => loading.close(), 100);
        this.$buefy.modal.open({
          parent: this,
          component: ModalForm,
          hasModalCard: true,
          trapFocus: true,
          props: {
            foods: this.$data.foods,
          },
          events: {
            'show-cook': (value) => {
              this.showCook(value.level, value.food);
            },
          },
        });
      });
    },
    getAllFoods() {
      return fetch(
        `https://script.google.com/macros/s/AKfycby46PNdUSQNTidw0bktB9xd0II-MG4rK03kPHvnFlkUFTx_ek8/exec`,
      )
        .then((res) => res.json())
        .then((obj) => {
          this.$data.foods = obj.data;
        });
    },

    /* Cook */

    showCook(level, food) {
      const loading = this.open();
      fetch(
        `https://script.google.com/macros/s/AKfycby46PNdUSQNTidw0bktB9xd0II-MG4rK03kPHvnFlkUFTx_ek8/exec?food=${food}`,
      )
        .then((res) => {
          try {
            return res.json();
          } catch (error) {
            this.$buefy.toast.open(`找不到 ${food}`);
          }
        })
        .then((obj) => {
          setTimeout(() => {
            loading.close();
          }, 100);
          this.$buefy.dialog.alert({
            title: '占卜結果',
            message: this.cook(level, obj.hard, obj.exp),
            confirmText: '讚',
          });
        });
    },

    cook(level = 1, hard = 1, exp = '50/80') {
      let raw = Number(exp.split('/')[0]);
      let rate = this.prob(this.cook2dice(level), hard);
      let cooked = rate * this.getCookBonus(level) * Number(exp.split('/')[1]);
      let messages = [];
      messages.push('料理等級: ' + level);
      messages.push('料理難度: ' + hard);
      messages.push('食材經驗值: ' + exp);
      messages.push('生吃期望值: ' + raw);
      messages.push('料理期望值: ' + cooked);
      messages.push('料理成功率: ' + rate);
      if (raw > cooked) messages.push('建議: 生吃');
      else if (raw < cooked) messages.push('建議: 熟食');
      else messages.push('建議: 都行');
      return messages.join('<br />');
    },

    /**
     * @param {Number} num
     * @param {Number} offset
     */
    getDice(num, offset = 0) {
      return Array.from(Array(num).keys()).map((n) => n + offset + 1);
    },

    prob(a, b) {
      if (typeof a == 'number' && typeof b == 'number') {
        return Number(a >= b);
      } else if (typeof a == 'number') {
        return b.filter((i) => a >= i).length / b.length;
      } else if (typeof b == 'number') {
        return a.filter((i) => i >= b).length / a.length;
      } else {
        let count = 0;
        a.forEach((i) => {
          b.forEach((j) => {
            if (i >= j) count++;
          });
        });
        return count / (a.length * b.length);
      }
    },

    cook2dice(level) {
      let dice;
      if (level < 1) {
        throw new Error('你不能料理', level);
      } else if (level <= 2) {
        dice = 4;
      } else {
        dice = 6;
      }
      return this.getDice(Number(dice), Number(level));
    },

    getCookBonus(level) {
      let bonus;
      if (level < 1) {
        throw new Error('你不能料理', level);
      } else if (4 >= level) {
        bonus = 1.0;
      } else if (7 >= level) {
        bonus = 1.2;
      } else if (8 >= level) {
        bonus = 1.5;
      } else if (11 >= level) {
        bonus = 1.7;
      } else if (15 >= level) {
        bonus = 2.0;
      }
      return bonus;
    },
  },
};
</script>
