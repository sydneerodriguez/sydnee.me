<script lang='tsx'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Asset from './Asset.vue'
import Paragraph from './Paragraph.vue'

@Component({
  props: {
    type: String,
    content: String,
  },
})
export default class Content extends Vue {
  render (h: Vue.CreateElement) {
    if (this.$props.type === 'image') {
      return <Asset props={{ file: this.$props.content }}/>
    }

    if (this.$props.type === 'paragraph') {
      return <Paragraph>{this.$props.content}</Paragraph>
    }
  }
}
</script>
