<template>
  <div class="min-h-screen sm:border-l sm:border-r border-gray-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user"/>
    <div class="feed flex flex-col">
      <ButtonScrollToTop />
      <Entry v-for="article in pinnedArticles" :key="article.id" :content="article" :isPinned="true" />

      <!-- Render unpinned articles -->
      <Entry v-for="article in unpinnedArticles" :key="article.id" :content="article" />
    </div>
  </div>
</template>
  
<style>
.feed>*:not(:last-child) {
  @apply border-b border-gray-100;
}
</style>

<script setup>
import users from '~/constants/users';

const route = useRoute();
const allArticles = await queryContent('articles').where({ author: route.params.author }).find();
const user = users.find(user => user.handle === route.params.author);

const pinnedArticles = computed(() => allArticles.filter(article => article.isPinned));
const unpinnedArticles = computed(() => allArticles.filter(article => !article.isPinned));
</script>