<template>
  <div class="relative">
    <div class="entry-container flex flex-col">
      <Entry v-if="pinnedArticle" :content="pinnedArticle" />
      <Entry v-if="articles" v-for="article in articles" :content="article" />
    </div>
  </div>
</template>
  
<style>
.entry-container>*:not(:last-child) {
  @apply border-b border-gray-100;
}
</style>

<script setup>
const route = useRoute();
const author = route.params.author;
const articles = await queryContent('articles').where({ author: author }).where({ pinned: { $ne: true } }).find();
const pinnedArticle = await queryContent('articles').where({ author: author }).where({ pinned: { $eq: true } }).findOne();
</script>