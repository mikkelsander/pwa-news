// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App'
import newsService from './newsService';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.use(VueOnsen);




const service = new newsService();

service.getSources().then(sources => sources.map(source => {
  console.log(source.name);
}))

service.getNewsFromSource('the-washington-post').then(articles => articles.map(article => {
  console.log(article.title);
}))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
