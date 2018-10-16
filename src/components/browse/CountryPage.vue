<template>
  <v-ons-page>

    <v-ons-toolbar>
      <v-ons-back-button>
        <p>Back</p>
      </v-ons-back-button>

      <p class="center">{{ name }}</p>

    </v-ons-toolbar>

    <div>
      <img :alt="title" :src="flagUrl">
    </div>

    <p> {{ code }} </p>

  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      name: ''
    };
  },
  computed: {
    flagUrl() {
      let code = this.code.toLowerCase();
      return `/static/country-flags/${code}.svg`;
    }
  }
};
</script>

<style>
</style>
