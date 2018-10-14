<template>
  <v-ons-page>

    <v-ons-toolbar>
      <div class="center" style="text-align: center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto" :tabs="tabs" :index.sync="activeIndex">
      <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.label" :page-stack="pageStack"></component>
      </template>
    </v-ons-tabbar>


  </v-ons-page>
</template>

<script>
import Browse from './Browse';
import Feed from './Feed';
import Settings from './Settings';

export default {
  props: ['pageStack'],

  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Feed',
          page: Feed
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Browse',
          page: Browse
        },

        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: Settings
        }
      ]
    };
  },

  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },

  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
};
</script>
</script>

<style>
</style>
