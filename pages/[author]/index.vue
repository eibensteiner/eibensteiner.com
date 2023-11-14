<template>
  <!--<div>
    <h1>Articles by {{ $route.params.author }}</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <nuxt-link :to="`/${article.author}/${article.slug}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>-->


  <div class="relative">
        <div class="entry-container flex flex-col">
            <Entry v-if="articles" v-for="article in articles" :content="article"/>        
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
const articles = await queryContent('articles').where({ author: author }).find();
</script>