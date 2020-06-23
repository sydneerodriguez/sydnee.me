<template>
  <div
    class='asset'
    v-bind:style="dimensions"
  >
    <img
      ref='image'
      v-bind:src='this.src'
      v-bind:width="dimensions.width"
      v-bind:height="dimensions.height"
      v-on:load='shouldTransition = true'
      decoding='async'
      loading='lazy'
    />
    <BlurHash
      v-if='!transitionEnded'
      v-bind='blurhash'
      v-bind:class='{ transition: shouldTransition }'
      v-on:transitionend='transitionEnded = true'
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import { store } from '../store'
import BlurHash from './BlurHash.vue'

@Component({
  props: {
    file: String,
  },
  components: {
    BlurHash,
  },
})
export default class Asset extends Vue {
  shouldTransition = false
  transitionEnded = false

  get src () {
    return `/assets/${this.$props.file}`
  }

  get blurhash () {
    return store.getBlurhash(this.$props.file)
  }

  get dimensions () {
    return {
      width: this.blurhash?.fw + 'px',
      height: this.blurhash?.fh + 'px',
    }
  }
}
</script>

<style scoped>
.asset {
  position: relative;
}

.asset > * {
  position: absolute;
}

.asset canvas {
  opacity: 1;
  transition: all 0.5s;
}

.transition {
  opacity: 0 !important;
}
</style>
