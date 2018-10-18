<template>
  <div id="app">
    <v-ons-navigator :page-stack="pageStack">
      <component v-for="page in pageStack" :is="page" :key="page.name" :page-stack="pageStack"></component>
    </v-ons-navigator>
  </div>
</template>

<script>
import TabBar from './TabBar';

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
