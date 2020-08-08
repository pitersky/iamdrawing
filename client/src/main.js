import Vue from 'vue';
import VueInstagram from 'vue-instagram'
import router from './router'
import App from './App.vue';
import './styles/app.css';

Vue.config.productionTip = false;

Vue.use(VueInstagram)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
