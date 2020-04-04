<template>
  <div v-if="project">
    <Title>{{project.title}}</Title>
    <Description>{{project.description}}</Description>
    <Date v-bind:date="project.date" />
    <Content
      v-for="(content, id) in project.content"
      v-bind="content"
      v-bind:key="id"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { store } from '@/store'

import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'
import Date from '@/components/Date.vue'
import Content from '@/components/Content.vue'

@Component({
  components: {
    Title,
    Description,
    Date,
    Content,
  },
})
export default class Project extends Vue {
  get project () {
    return store.getProject(this.$route.params.id)
  }

  mounted () {
    store.loadProject(this.$route.params.id)
  }
}
</script>
