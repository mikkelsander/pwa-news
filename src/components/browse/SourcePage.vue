<template>
   <v-ons-page>

     <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>

      <p class="center">{{ title }}</p>

     </v-ons-toolbar>


    <div>
      <img :alt="title" :src="iconUrl">
    </div>

    <p> {{ description }} </p>

    <p> {{id}} </p>

    <p> {{ category }} </p>

    <p> {{ language }}</p>

   </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      id: 'test',
      title: 'test',
      url: 'test',
      language: 'test',
      description: 'test',
      category: 'test'
    };
  },
  computed: {
    iconUrl() {
      return `https://icon-locator.herokuapp.com/icon?url=${this.url}&amp;size=70..120..200`;
    }
  }
};
</script>

<style>
</style>
