<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
</script>

<style scoped>
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: none;
  }

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    margin-top: 100px;
    flex-grow: 1;
  }
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

  body {
    margin: 0px;

    font-family: 'Roboto';
    font-size: 16px;

    overflow-x: hidden;
    width: 100vw;
  }
</style>
