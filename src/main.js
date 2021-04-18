import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store';
import vuetify from './plugins/vuetify';
import VueMask from 'v-mask'

Vue.use(VueMask)
require('moment/locale/ru');

Vue.use(require('vue-moment'), {
  moment: require('moment'),
});

Vue.config.productionTip = false


//Push notifications!!!
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let notifyArr = [
  'Сегодня обязательно нужно посмотреть гороскоп!',
  'Ты уже знаешь, какой день тебя ждёт?',
  'Перед выходом из дома, обязательно загляни в приложение',
  'У нас есть для тебя прогноз дня!',
];
let random = Math.floor(getRandomArbitrary(0, notifyArr.length - 1))

document.addEventListener('deviceready', function () {

  window.cordova.plugins.notification.local.schedule({
    title: 'Доброе утро!',
    trigger: { every: { hour: 8, minute: 0 } },
    text: notifyArr[random],
    foreground: true,
  });
}, false);




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
