<template>
  <v-ons-card @click="$emit('card-clicked')">

    <div>
      <img :alt="title" :src="flagUrl">
    </div>

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
img {
  max-width: 100%;
}

@media (min-width: 480px) {
  /* medium */
}
@media (min-width: 720px) {
  /* large */
}
</style>
