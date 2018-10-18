<template>
  <v-ons-page>

    <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>
      <p class="center">{{ sourceInfo.title }}</p>
    </v-ons-toolbar>


    <div>
      <img :alt="sourceInfo.title" :src="iconUrl">
    </div>

    <p> {{ sourceInfo.description }} </p>

    <p> {{sourceInfo.id}} </p>

    <p> {{sourceInfo.category }} </p>

    <p> {{ sourceInfo.language }}</p>

    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
      <v-ons-carousel-item v-for="(article, index) in articles" :key="index">

        <div>
         <img alt="article image" :src="article.urlToImage">
        </div>

        <p>{{ article.title }}</p>
        <p>{{ article.author }}</p>
        <p>{{ article.url }}</p>
        <p>{{ article.content }}</p>
      </v-ons-carousel-item>
    </v-ons-carousel>

  </v-ons-page>
</template>

<script>
import { getTopHeadlinesFromSource } from '@/services/newsService';
export default {
  data() {
    return {
      carouselIndex: 0,
      articles: []
    };
  },

  computed: {
    iconUrl() {
      return `https://icon-locator.herokuapp.com/icon?url=${this.sourceInfo.url}&amp;size=70..120..200`;
    },
    sourceInfo() {
      return this.$store.state.sourcePage.info;
    },
  },

  methods: {
    async getArticles() {
      this.articles = await getTopHeadlinesFromSource(this.sourceInfo.id)
    }
  },

  created() {
    this.getArticles();
  }
};
</script>

<style>
img {
  max-width: 100%
}
</style>
