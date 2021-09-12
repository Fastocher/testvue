import Vue from 'vue'
import Css from './style.css'

import moment from 'moment'
moment.locale('ru');

import App from './App.vue'



Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format("hh:mm, D MMMM YYYY г. ")
  }
});

new Vue({
  el: '#app',
  data:{
  },
  render: h => h(App)
})
