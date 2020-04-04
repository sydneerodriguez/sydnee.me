<template>
  <div>
    <Asset
      v-if="$props.type === 'image'"
      v-bind:file="$props.content"
    />
    <Paragraph
      v-if="$props.type === 'paragraph'"
    >
      {{$props.content}}
    </Paragraph>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Asset from '@/components/Asset.vue'
import Paragraph from '@/components/Paragraph.vue'

@Component({
  props: {
    type: String,
    content: String,
  },
  components: {
    Asset,
    Paragraph,
  },
})
export default class Content extends Vue {

}
</script>
