import Vue from 'vue'
import App from './App.vue'
import VueScrollMagic from './vue-scrollmagic.js'

Vue.config.productionTip = false

Vue.use(VueScrollMagic, { addIndicators: true })

new Vue({
  render: h => h(App),
}).$mount('#app')
