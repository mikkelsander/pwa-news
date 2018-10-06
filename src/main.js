// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import newsService from './newsService';

const service = new newsService();

service.getSources().then(sources => sources.map( source => {
  console.log(source.name);
}))

service.getNewsFromSource('the-washington-post').then(articles => articles.map( article => {
  console.log(article.title);
}))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
