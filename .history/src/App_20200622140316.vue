<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <button @click="goHome">首页</button>
    <router-link to="/my" tag="li">
        <span class="menu-text">我的</span>
    </router-link>
    <router-link to="/about" tag="li">
        <span class="menu-text">关于</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods:{
    goHome(){
      this.$qrouter.push('/home');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
