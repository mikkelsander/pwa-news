// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'

import App from './components/App'
import newsService from './services/newsService';
import {
  store
} from './store';

Vue.use(VueOnsen);


// service.getSources().then(sources => sources.map(source => {
//   console.log(source.url);
// }))

// service.getNewsFromSource('the-washington-post').then(articles => articles.map(article => {
//   console.log(article.title);
// }))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App
  },
  template: '<App/>'
})
