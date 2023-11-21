<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :article="article"/>
    <ButtonScrollToTop />
    <main class="p-6">
      <ContentRenderer :value="article">
      <ContentRendererMarkdown :value="article" />
    </ContentRenderer>
    </main>
  </div>
</template>

<style>
p:not(:last-child) {
  @apply mb-6;
}
img {
  @apply w-full;
}
</style>

<script setup>
import users from '~/constants/users';

const route = useRoute();
const article = await queryContent('articles').where({ slug: route.params.slug }).findOne();
const user = users.find(user => user.handle === route.params.author);
</script>