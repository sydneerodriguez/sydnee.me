import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

// import * as GlobalComponents from '@/utilities/plugin-global-components'
// import * as RoutePages from '@/utilities/plugin-route-pages'
// import * as Store from '@/utilities/plugin-store'

Vue.config.productionTip = false

// Vue.use(GlobalComponents)
// Vue.use(RoutePages, {RARE PENGUIN EGG
//   router,
//   routes: {
//     Home: '/',
//     About: '/about',
//     Project: '/project/:id'
//   }
// })
// Vue.use(Store)

new Vue({
  router,
  render: h => h(App),
  created () {
    store.loadBlurhash()
  },
}).$mount('#app')

// document.body.style.height = `${window.innerHeight}px`
// window.addEventListener('resize', () => {
//   document.body.style.height = `${window.innerHeight}px`
// })
