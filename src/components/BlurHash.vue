<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import decode from 'blurhash/dist/decode'

@Component({
  props: {
    hash: String,
    width: Number,
    height: Number,
  },
})
export default class BlurHash extends Vue {
  get pixels () {
    return decode(this.$props.hash, this.$props.width, this.$props.height)
  }

  mounted () {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    canvas.width = this.$props.width
    canvas.height = this.$props.height
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const imageData = context.createImageData(canvas.width, canvas.height)
    imageData.data.set(this.pixels)
    context.putImageData(imageData, 0, 0)
  }
}
</script>
