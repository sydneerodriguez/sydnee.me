<template>
  <p>
    <slot />
  </p>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Paragraph extends Vue {
}
</script>
