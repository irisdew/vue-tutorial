<template>
  <div class="recipe">
    <router-link to="/">&lt; Back</router-link>
    <h1>{{ meal.title }}</h1>
    <span class="desc" v-html="cleanText(meal.description)"></span>
    <hr />
    <p class="place">{{ meal.place }}</p>
    <div><span v-for="i in meal.star" :key="i">⭐</span></div>
  </div>
</template>

<script>
export default {
  computed: {
    meal() {
      return this.$store.state.meals.find(
        (meal) => meal.slug === this.$route.params.slug
      );
    },
  },
  methods: {
    cleanText(text) {
      return text.replace(/\n/g, "<br />");
    },
  },
};
</script>

<style>
</style>