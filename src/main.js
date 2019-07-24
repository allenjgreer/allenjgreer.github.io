import Vue from 'vue'
import HelloWorld from './components/HelloWorld'

Vue.component('helloWorld', HelloWorld)

document.addEventListener('DOMContentLoaded', (event) => {
  const app = new Vue({
    el: '#app'
  });
});
