<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "TitleComponent",
  // data() {
  //   return {
  //     title: "Hello Jing",
  //   };
  // },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  color: brown;
}
</style>



