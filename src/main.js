import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import i18n from './i18n/'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: function (h) { return h(App) },
  created () {
    global.$t = this.$t
    // this.$http.get('/users/1').then(({data}) => console.log(data))
  
    // fetch menu from server
    // this.$http.get('/menu').then(({data}) => {
    //   this.$store.commit('setMenu', data)
    // })
    // this.$store.dispatch('checkPageTitle', this.$route.path)
    // this.$store.dispatch('checkAuth')
  }
}).$mount('#app')
