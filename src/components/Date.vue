<template>
  <span>
    {{timestamp}}
  </span>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    start: String,
    end: String,
  },
})
export default class Date extends Vue {
  get timestamp () {
    return new Intl.DateTimeFormat(undefined, {
      // @ts-ignore
      dateStyle: 'long',
      // @ts-ignore
    }).formatRange(
      new window.Date(this.$props.start),
      new window.Date(this.$props.end || this.$props.start),
    )
  }
}
</script>
