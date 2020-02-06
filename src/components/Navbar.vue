<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item>
        <img src="@/assets/logo.png" alt="地下城與美食" />
      </b-navbar-item>
      <b-navbar-item>
        <h1><strong>地下城與美食 非官方 排行榜</strong></h1>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

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
