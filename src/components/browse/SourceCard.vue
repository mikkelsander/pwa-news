<template>
  <v-ons-card>

    <img class="icon" :alt="title" :data-src="iconUrl"
      referrerpolicy="no-referrer" :src="iconUrl"
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
