<template>
  <v-ons-page>

    <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>
      <p class="center">{{ sourceInfo.name }}</p>
    </v-ons-toolbar>
    <div class="page-content">
      <div class="info-container">
        <div class="img-box">
          <img :alt="sourceInfo.name" :src="iconUrl">
        </div>

        <div class="description">
          <p>{{ sourceInfo.description }} </p>
        </div>

        <div class="other-info">
          <div class="labels">
            <p><span>source:</span></p>
            <p><span>category:</span></p>
            <p><span>language:</span></p>
          </div>
          <div>
            <p><em><a :href="sourceInfo.url">{{ sourceInfo.url }}</a></em></p>
            <p><em>{{sourceInfo.category }}</em></p>
            <p><em>{{ sourceInfo.language }}</em></p>
          </div>
        </div>
        <div class="subscribe-button">
          <v-ons-button ripple>Subscribe</v-ons-button>
        </div>
      </div>

      <div class="carousel">
        <h4> Top headlines from {{ sourceInfo.name }} right now </h4>
        <p> Showing article {{ carouselIndex + 1 }} / {{ articles.length }} </p>

        <div class="dots" v-if="articles.length <= 10">
          <span :index="dotIndex - 1" v-for="(_ , dotIndex) in articles" :key="dotIndex" @click="carouselIndex = dotIndex - 1">
            {{ carouselIndex === dotIndex ? '\u25CF' : '\u25CB' }}
          </span>
        </div>

        <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
          <v-ons-carousel-item v-for="(article, index) in articles" :key="index">
            <div class="item">
            <div>
              <img alt="article image" :src="article.urlToImage">
            </div>

            <h4>{{ article.title }}</h4>
            <!-- <p>{{ article.author }}</p> -->
            <p>{{ article.description }}</p>
            <p>{{ article.content }}</p>
            <p><a :href="article.url">See full article</a></p>
            </div>
          </v-ons-carousel-item>
        </v-ons-carousel>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import {
    getTopHeadlinesFromSource
  } from '@/services/newsService';

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

      name() {
        return sourceInfo.name !== '' ? sourceInfo.name : 'No title'
      }

    },

    methods: {
      async getArticles() {
        this.articles = await getTopHeadlinesFromSource(this.sourceInfo.id)
        console.log(this.articles)
      }
    },

    created() {
      this.getArticles();
    }
  };

</script>

<style scoped>

  .info-container {
    display: grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    box-shadow: 0 2px rgba(173, 173, 173, 0.459);
    background: white;
    margin-bottom: 1rem;
  }

  .info-container p {
    margin: 0;
    text-align: left;
  }

  .img-box>img {
    width: 100%;
  }

  img {
    max-width: 100%;
  }

  .other-info {
    grid-column-end: span 2;
    display: flex;
  }

  .labels {
    width: 25%;
  }

  .other-info em {
    margin-left: 0.5rem;
  }

  .other-info > p {
    margin: 0;
  }

  .carousel > h4 {
    padding: 0 1rem;
  }

  .dots {
    font-size: 30px;
    margin-bottom: 0.5rem;

  }

  .subscribe-button {
    grid-column-start: 2;
    text-align: right;
  }


</style>
