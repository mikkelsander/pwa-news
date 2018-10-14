<template>
  <v-ons-page>
    <p>
      <v-ons-search-input placeholder="Search" v-model="query"></v-ons-search-input>
    </p>

    <h3>Discover top headlines</h3>
    <!-- <img src="@/assets/country-flags/ar.svg"></img> -->

    <div class="center">
      <v-ons-segment class="browse-filter-buttons" :index.sync="segmentIndex">
        <button @click="displaySourceList = true">Popular publishers</button>
        <button @click="displaySourceList = false">Countries</button>
      </v-ons-segment>


      <div class="browse-grid" v-show="displaySourceList">
        <source-card class="browse-item" v-for="source in sourceList" :title="source.name" :url="source.url"
          :description="source.description" :category="source.category" :key="source.id">
        </source-card>
      </div>

      <div class="browse-grid" v-show="!displaySourceList">
        <country-card class="browse-item" v-for="country in countryList" :title="country.name" :code="country.code" :key="country.name">
        </country-card>
      </div>

    </div>

  </v-ons-page>
</template>

<script>
import SourceCard from './SourceCard';
import CountryCard from './CountryCard';
import NewsService from '@/services/newsService.js';
import countryList from '@/available-countries.js';

export default {
  components: {
    CountryCard,
    SourceCard
  },
  props: ['pageStack'],
  data() {
    return {
      query: '',
      segmentIndex: 0,
      sourceList: [],
      countryList: [],
      displaySourceList: true
    };
  },
  created() {
    // const service = new NewsService();
    // service.getsourceList().then(sourceList => {
    //   this.sourceList = sourceList;
    //   console.log(sourceList);
    // });

    let sourceList = [
      {
        category: 'general',
        country: 'us',
        description: '',
        id: 'abc-news',
        language: 'en',
        name: 'ABC News',
        url: 'https://abcnews.go.com'
      },
      {
        category: 'general',
        country: 'au',
        description:
          "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        id: 'abc-news-au',
        language: 'en',
        name: 'ABC News (AU)',
        url: 'http://www.abc.net.au/news'
      },
      {
        category: 'general',
        country: 'no',
        description:
          'Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.',
        id: 'aftenposten',
        language: 'no',
        name: 'Aftenposten',
        url: 'https://www.aftenposten.no'
      },
      {
        category: 'general',
        country: 'us',
        description:
          'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
        id: 'al-jazeera-english',
        language: 'en',
        name: 'Al Jazeera English',
        url: 'http://www.aljazeera.com'
      },
      {
        category: 'general',
        country: 'it',
        description:
          'Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.',
        id: 'ansa',
        language: 'it',
        name: 'ANSA.it',
        url: 'http://www.ansa.it'
      },
      {
        category: 'business',
        country: 'sa',
        description:
          'ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ',
        id: 'argaam',
        language: 'ar',
        name: 'Argaam',
        url: 'http://www.argaam.com'
      },
      {
        category: 'technology',
        country: 'us',
        description:
          "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
        id: 'ars-technica',
        language: 'en',
        name: 'Ars Technica',
        url: 'http://arstechnica.com'
      }
    ];

    this.sourceList = sourceList;
    this.countryList = countryList;
    console.log(countryList);
  }
};
</script>

<style scoped>
.browse-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.browse-item {
  width: 45%;
}

p {
  margin-bottom: 2rem;
}

.browse-filter-buttons {
  width: 80%;
  margin-bottom: 1rem;
}
</style>
