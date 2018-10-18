import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const subscriptions = {

}

const browse = {

}

const settings = {

}

const user = {

}

const feed = {

}

// import NewsService from './services/newsService';
// const service = new NewsService();


export const store = new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production',

  state: {
    countryPage: {
      info: {},
    },
    sourcePage: {
      info: {},
    },
  },

  mutations: {
    updateCountryPageInfo(state, countryInfo) {
      state.countryPage.info = countryInfo;
    },
    updateSourcePageInfo(state, sourceInfo) {
      state.sourcePage.info = sourceInfo;
    },
  }

  //   updateCountryPageArticles(state, articles) {
  //     state.countryPage.articles = articles;
  //   },
  //   updateSourcePageArticles(state, articles) {
  //     state.sourcePage.articles = articles;
  //   }
  // },

  // actions: {
  //   async getCountryPageArticles({ commit }, countryCode) {
  //     const articles = await service.getTopHeadlinesFromCountry(countryCode);
  //     commit('updateCountryPageArticles', articles);

  //   },

  //   async getSourcePageArticles({ commit }, source) {
  //       const articles = await service.getTopHeadlinesFromSource(source.id)
  //       commit('updateSourcePageArticles', articles);
  //     }
  //   }

})
