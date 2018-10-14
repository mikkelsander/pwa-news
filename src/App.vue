<template>
  <div id="app">
    <v-ons-page>

      <v-ons-navigator :page-stack="pageStack">
        <component v-for="page in pageStack" :is="page" :key="page.toString()" :page-stack="pageStack"></component>
      </v-ons-navigator>

    </v-ons-page>
  </div>
</template>

<script>
import TabBar from './components/TabBar';

export default {
  name: 'App',
  components: {
    TabBar
  },
  data() {
    return {
      pageStack: [TabBar]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
