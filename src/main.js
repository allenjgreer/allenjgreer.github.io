import Vue from 'vue'
import App from './App.vue'

document.addEventListener('DOMContentLoaded', () => {
  window.stars = new Vue({
    render: h => h(App)
  }).$mount('#app')
})
