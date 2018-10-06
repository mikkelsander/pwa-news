'use strict';
import { newsApiKey } from '../secrets.js';

export default class newsService {


  async getSources() {
    const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${newsApiKey}`)
    const json = await res.json();
    return json.sources;
  }

  async getNewsFromSource(source) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsApiKey}`)
    const json = await res.json();
    return json.articles;
  }

}
