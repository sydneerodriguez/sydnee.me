<template>
  <header>
    <Title>Sydnee Rodriguez</Title>
    <Navigation />
  </header>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Title from './Title.vue'
import Navigation from './Navigation.vue'

@Component({
  components: {
    Title,
    Navigation,
  },
})
export default class Header extends Vue {

}
</script>

<style scoped>
  header {
    width: 100%;
    height: 100px;

    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;

    display: flex;
    justify-content: space-between;

    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    backdrop-filter:
      blur(5px)
      invert()
      hue-rotate(180deg)
      opacity(30%)
    ;
  }

  header h1 {
    margin: auto 0px auto 50px;
  }

  header nav {
    margin: auto 50px auto 0px;
    font-size: 1.25rem;
  }
</style>
