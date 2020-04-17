<template>
  <canvas
    ref="canvas"
    v-bind:style="style"
    v-on="$listeners"
    v-bind="$attrs"
  ></canvas>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import decode from 'blurhash/dist/decode'

@Component({
  props: {
    fw: Number,
    fh: Number,
    sw: Number,
    sh: Number,
    hash: String,
  },
  watch: {
    sw: 'update',
    sh: 'update',
    hash: 'update',
  },
})
export default class BlurHash extends Vue {
  get style () {
    return {
      width: this.$props.fw + 'px',
      height: this.$props.fh + 'px',
    }
  }

  get pixels () {
    return decode(this.$props.hash, this.$props.sw, this.$props.sh)
  }

  update () {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    canvas.width = this.$props.sw
    canvas.height = this.$props.sh
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const imageData = context.createImageData(canvas.width, canvas.height)
    imageData.data.set(this.pixels)
    context.putImageData(imageData, 0, 0)
  }

  mounted () {
    this.update()
  }
}
</script>
