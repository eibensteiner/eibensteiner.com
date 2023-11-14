<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <nuxt-link :to="`/${article.author}`">Go to {{ article.author }}'s work'</nuxt-link>
      <nuxt-link :to="`/${article.author}/${article.slug}`">{{ article.title }}</nuxt-link>
    </li>
  </ul>
</template>

<style>
.entry-container>*:not(:last-child) {
    @apply border-b border-gray-100;
}
</style>

<script setup>
const articles = await queryContent('articles').find();
console.log(articles);
</script>