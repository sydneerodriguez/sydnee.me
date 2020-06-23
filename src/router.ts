import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Project from './pages/Project.vue'


Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/project/:id',
    component: Project,
  },
]

export const router = new VueRouter({ routes })
