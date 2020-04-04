<template>
  <div>
    <router-link
      v-for="{ id } of list"
      v-bind:to="'/project/' + id"
      v-bind:key="id"
    >
      {{id}}
    </router-link>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { store } from '@/store'

@Component({
  components: {
  },
})
export default class Home extends Vue {
  get list () {
    return store.getProjectList()
  }

  mounted () {
    store.loadProjectList()
  }
}
</script>

<style scoped>
  main {
    height: 1024px
  }
</style>
