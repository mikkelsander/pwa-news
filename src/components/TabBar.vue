<template>
  <v-ons-page>

    <v-ons-toolbar>
      <div class="center center-text">News app</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto" :tabs="tabs" :index.sync="activeIndex">
      <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.label" :page-stack="pageStack"></component>
      </template>
    </v-ons-tabbar>

  </v-ons-page>
</template>

<script>
import BrowsePage from './browse/BrowsePage';
import FeedPage from './feed/FeedPage';
import SettingsPage from './settings/SettingsPage';

export default {
  props: ['pageStack'],

  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          // icon: this.md() ? null : 'ion-home',
          label: 'Feed',
          page: FeedPage
        },
        {
          // icon: this.md() ? null : 'ion-ios-settings',
          label: 'Discover',
          page: BrowsePage
        },

        {
          // icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: SettingsPage
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

<style scoped>
.center-text {
  text-align: center;
}
</style>
