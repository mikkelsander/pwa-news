<template>
  <v-ons-card>

    <img class="icon" :alt="title" :src="flagUrl"
      referrerpolicy="no-referrer"
      data-was-processed="true">

    <div> {{ title }}</div>

  </v-ons-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },

  computed: {
    flagUrl() {
      let code = this.code.toLowerCase();
      return `/static/country-flags/${code}.svg`;
    }
  }
};
</script>

<style scoped>
/* img {
  height: 30px;
  width: 30px;
} */
</style>
