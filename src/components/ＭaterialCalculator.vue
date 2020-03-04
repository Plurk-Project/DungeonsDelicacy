<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">素材售價計算機</p>
    </header>
    <section class="modal-card-body">
      <b-field label="物品欄數">
        <b-numberinput v-model="columnCount" min="1" max="12"></b-numberinput>
      </b-field>
      <b-field grouped v-for="(n, index) in columnCount" :key="'p' + index">
        <b-field>
          <b-autocomplete
            @select="(option) => (materialsChoosed[index] = option)"
            :data="materials"
            icon="food-apple"
            placeholder="選擇一個素材"
            field="name"
            open-on-focus
          >
            <template slot="empty">找不素材</template>
          </b-autocomplete>
        </b-field>
        <b-field>
          <b-numberinput
            controls-position="compact"
            controls-rounded
            v-model="materialsNumber[index]"
            min="1"
            max="1000"
          ></b-numberinput>
        </b-field>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" @click="showResult()">
        GO!
      </button>
    </footer>
  </div>
</template>

<script>
import '../lib/util';

export default {
  data: () => ({
    columnCount: 1,
    materials: [],
    materialsChoosed: [],
    materialsNumber: Array.from({ length: 20 }, () => 1),
  }),
  mounted() {
    const loading = this.$buefy.loading.open();
    // TODO:       if (this.materials.length == 0) { 優化 但要用 emit props 傳遞 materials
    setTimeout(() => {
      fetch(
        'https://script.google.com/macros/s/AKfycbz9Wdl3svakmlVhDPCeoPvLbb0GGDP3d41zcKcM8mNntgJW44t3/exec?table=素材',
      )
        .then((res) => res.json())
        .then((obj) => {
          this.materials = obj.data
            .filter((x) => x.name != '??')
            .map((x) => {
              x.price = x.price.fullToHalf();
              x.sold = parseInt(x.price.split('/')[1]);
              return x;
            });
        })
        .then(() => loading.close());
    }, 100);
  },
  methods: {
    checkAllSelected() {
      const materialsChoosed = this.materialsChoosed.slice(0, this.columnCount);
      if (
        materialsChoosed.length < this.columnCount ||
        !materialsChoosed.every(Boolean)
      ) {
        this.$buefy.snackbar.open({
          duration: 3000,
          message: '尚有空位還沒選擇素材',
          position: 'is-bottom',
          type: 'is-warning',
        });
        return false;
      }
      return true;
    },
    showResult() {
      if (!this.checkAllSelected()) return;
      let message;
      let copyMessage;
      let type = 'is-primary';
      try {
        message = '【販售】\n';
        let total = 0;
        for (let i = 0; i < this.columnCount; i++) {
          let material = this.materialsChoosed[i];
          let number = this.materialsNumber[i];
          let sum = material.sold * number;
          total += sum;
          message += `${material.name} x ${number} = ${sum}\n`;
        }
        message += `共 ${total} 元`;
        copyMessage = message;
        message = `<pre>${message}</pre>`;
      } catch (error) {
        type = 'is-danger';
        message = `發生了一些錯誤 這個程式還在 Beta 版<br /><code>${error}</code>`;
      }
      this.$buefy.dialog.confirm({
        title: '計算結果',
        message,
        type,
        cancelText: '關閉',
        confirmText: '複製',
        onConfirm: () => {
          this.$copyText(copyMessage).then(
            () => {
              this.$buefy.snackbar.open({
                duration: 3000,
                message: `複製成功！`,
                position: 'is-bottom',
                type: 'is-success',
              });
            },
            (error) => {
              this.$buefy.snackbar.open({
                duration: 3000,
                message: `複製失敗！錯誤：${e}`,
                position: 'is-bottom',
                type: 'is-danger',
              });
            },
          );
        },
      });
    },
  },
};
</script>
