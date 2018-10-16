<template>
  <v-ons-card @click="$emit('card-clicked')">

    <div>
      <img :alt="title" :src="iconUrl">
    </div>

    <div> {{ title }} </div>

  </v-ons-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    isPublisher: {
      type: Boolean,
      default: true
    },
    description: {
      type: String
    },
    category: {
      type: String
    }
  },
  computed: {
    iconUrl() {
      return `https://icon-locator.herokuapp.com/icon?url=${this.url}&amp;size=70..120..200`;
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

