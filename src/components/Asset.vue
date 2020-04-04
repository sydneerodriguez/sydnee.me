<template>
  <div>
    <BlurHash
      v-if="blurhash && !loaded"
      v-bind:hash="blurhash.hash"
      v-bind:width="blurhash.width"
      v-bind:height="blurhash.height"
    />
    <img
      ref="image"
      v-bind:class="{ loaded }"
      v-bind:src="src"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import { store } from '@/store'
import BlurHash from '@/components/BlurHash.vue'

@Component({
  props: {
    file: String,
  },
  components: {
    BlurHash,
  },
})
export default class Asset extends Vue {
  loaded = false

  get src () {
    return `${process.env.BASE_URL}assets/${this.$props.file}`
  }

  get blurhash () {
    return store.getBlurhash(this.$props.file)
  }

  mounted () {
    const image = this.$refs.image as HTMLImageElement
    image.decode()
      .then(() => (this.loaded = true))
  }
}
</script>

<style scoped>
img {
  display: none;
}
.loaded {
  display: initial;
}
</style>
