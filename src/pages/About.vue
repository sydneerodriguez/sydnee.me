<template>
  <div>
    <Paragraph>
      Hey! I’m Sydnee Rodriguez, an enthusiastic designer, gamer, and multimedia storyteller.
    </Paragraph>
    <Paragraph>
      I’m currently following my passion studying at the University of California, Davis where I major in Design and double minor in Professional Writing and Communications.
    </Paragraph>
    <Paragraph>
      I enjoy blending the lines between fields and embracing interdisciplinary design to combine media and develop design solutions. I deliberately chose my fields of study to compliment my desire to communicate ideas through visual design and language.
    </Paragraph>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Paragraph from '@/components/Paragraph.vue'

@Component({
  components: {
    Paragraph,
  },
})
export default class About extends Vue {

}
</script>
