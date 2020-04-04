<template>
  <span>
    {{timestamp.toString()}}
  </span>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    date: Array,
  },
})
export default class Date extends Vue {
  get timestamp () {
    return new window.Date(
      this.$props.date[0],
      this.$props.date[1] - 1,
      this.$props.date[2],
    )
  }
}
</script>
