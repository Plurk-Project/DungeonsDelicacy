<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item>
        <img src="@/assets/logo.png" alt="地下城與美食" />
      </b-navbar-item>
      <b-navbar-item>
        <h1><strong>地下城與美食 非官方 排行榜</strong></h1>
      </b-navbar-item>
      <b-navbar-item>
        <div class="buttons">
          <b-button
            @click="showBrokenChars()"
            type="is-primary"
            size="is-small"
            icon-left="account-remove"
          ></b-button>
          <b-button
            @click="showCook()"
            type="is-primary"
            size="is-small"
            icon-left="pot-mix"
          ></b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    open() {
      const loadingComponent = this.$buefy.loading.open();
      return loadingComponent;
    },

    showBrokenChars() {
      const chars = this.$store.getters.getBrokenChars;
      this.$buefy.dialog.alert({
        title: '角卡格式不符或沒有權限名單',
        message: `<div class="list">${chars
          .map(this.itemWrapper)
          .join('')}</div>`,
      });
    },
    itemWrapper(item) {
      return `<a class="list-item">${item}</a>`;
    },

    /* Cook */

    showCook() {
      this.$buefy.dialog.prompt({
        message: `料理技能等級`,
        inputAttrs: {
          type: 'number',
          placeholder: '輸入等級',
          value: '1',
          maxlength: 2,
          min: 1,
        },
        trapFocus: true,
        onConfirm: (level) => {
          this.$buefy.dialog.prompt({
            message: `想要料理的食材`,
            inputAttrs: {
              placeholder: '如: 史萊姆的心臟',
              maxlength: 20,
            },
            trapFocus: true,
            onConfirm: (food) => {
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
          });
        },
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
