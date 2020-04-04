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

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
</script>

<style scoped>
  main {
    margin-top: 100px;
  }
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

  body {
    margin: 0px;

    font-family: 'Roboto';
    font-size: 16px;

    overflow-x: none;
    width: 100vw;
  }
</style>
