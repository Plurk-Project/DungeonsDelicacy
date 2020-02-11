<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">戰鬥占卜</p>
    </header>
    <section class="modal-card-body">
      <b-field label="玩家人數">
        <b-numberinput v-model="playerCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field grouped v-for="index in playerCount" :key="'p' + index">
        <b-field
          :label="attr.name"
          v-for="attr in attrs"
          :key="attr.variable"
          expanded
        >
          <b-input type="number" value="0" required></b-input>
        </b-field>
      </b-field>
      <b-field label="怪物數量">
        <b-numberinput v-model="monsterCount" min="1" max="6"></b-numberinput>
      </b-field>
      <b-field grouped v-for="index in monsterCount" :key="'m' + index">
        <b-field
          :label="attr.name"
          v-for="attr in attrs"
          :key="attr.variable"
          expanded
        >
          <b-input type="number" value="0" required></b-input>
        </b-field>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary">
        占卜
      </button>
    </footer>
  </div>
</template>
