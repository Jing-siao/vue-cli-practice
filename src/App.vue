<template>
  <div id="app">
    <HeaderComponent />
    <Banner />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TitleComponent :title="title" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Hello Jing",
    };
  },
  components: {
    HelloWorld,
    TitleComponent,
    HeaderComponent,
    Banner,
  },
};
</script>

<style lang="scss">
// @import "../ass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
