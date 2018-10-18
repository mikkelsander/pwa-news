<template>
  <v-ons-page>

    <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>

      <p class="center">{{ countryName }}</p>

    </v-ons-toolbar>

    <!-- <div>
      <img :alt="countryName" :src="flagUrl">
    </div> -->

    <div class="category-container">
      <p> Select a category </p>

      <div class="category" v-for="category in categories" :key="category"> {{ category }} </div>
    </div>

    <div>
      <h4> Top headlines in {{ selectedCategory }} in {{ countryName }} right now </h4>
      <p> Showing article {{ carouselIndex + 1 }} / {{ articles.length }} </p>

      <div class="dots" v-if="articles.length <= 10">
        <span :index="dotIndex - 1" v-for="(_ , dotIndex) in articles" :key="dotIndex" @click="carouselIndex = dotIndex - 1">
          {{ carouselIndex === dotIndex ? '\u25CF' : '\u25CB' }}
        </span>
      </div>

      <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
        <v-ons-carousel-item v-for="(article, index) in articles" :key="index">

          <div>
            <img alt="article image" :src="article.urlToImage">
          </div>

          <p>{{ article.title }}</p>
          <p>{{ article.author }}</p>
          <p>{{ article.description }}</p>
          <p>{{ article.content }}</p>
          <p><a :href="article.url">See full article</a></p>
        </v-ons-carousel-item>
      </v-ons-carousel>
    </div>

  </v-ons-page>
</template>

<script>
  import {
    getTopHeadlinesFromCountry
  } from '@/services/newsService.js';

  export default {
    data() {
      return {
        carouselIndex: 0,
        selectedCategory: 'Business',
        categories: [
          'Business',
          'Entertainment',
          'Health',
          'Science',
          'Sports',
          'Technology'
        ],
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
        console.log(this.articles)
      }
    },

    created() {
      this.getArticles();
    }

  };

</script>

<style>
  .category-container {
    background: white;
    padding: 1rem;
    box-shadow: 0 2px rgba(173, 173, 173, 0.459);
    margin: 1rem 0;
  }

  .category {
    border: 1px solid rgba(173, 173, 173, 0.459);
    border-radius: 2px;
    box-shadow: 1px 1px rgba(173, 173, 173, 0.459);
    padding: 0.5rem 0.5rem;
    margin: 0.5rem;
    display: inline-block;
    background: white;
  }

  img {
    max-width: 100%;
  }


  .dots {
    font-size: 30px;
    margin-bottom: 0.5rem;

  }

</style>
