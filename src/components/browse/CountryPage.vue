<template>
  <v-ons-page>

    <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>

      <p class="center">{{ countryName }}</p>

    </v-ons-toolbar>

    <div>
      <img :alt="countryName" :src="flagUrl">
    </div>

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
import { getTopHeadlinesFromCountry } from '@/services/newsService.js';

export default {
  data() {
    return {
      carouselIndex: 0,
      articles: []
    };
  },

  computed: {

    countryCode() {
      return this.$store.state.countryPage.info.code.toLowerCase();
    },

    countryName() {
      return this.$store.state.countryPage.info.name;
    },

    flagUrl() {
      return `/static/country-flags/${this.countryCode}.svg`;
    }
  },

  methods: {
    async getArticles() {
      this.articles = await getTopHeadlinesFromCountry(this.countryCode);
    }
  },

  created() {
    this.getArticles();
  }

};
</script>

<style>
img {
  max-width: 100%;
}
</style>
