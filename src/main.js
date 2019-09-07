import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/main.sass'

document.addEventListener('DOMContentLoaded', () => {
  window.stars = new Vue({
    render: h => h(App)
  }).$mount('#app')
})
