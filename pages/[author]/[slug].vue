<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :article="article" />
    <main class="py-6 px-7">
      <ButtonScrollToTop />
      <ContentRenderer :value="article">
        <ContentRendererMarkdown :value="article" />
      </ContentRenderer>
      <footer class="mt-8">
        <span>Explore more from {{ user.firstname }}</span>
        <link-block v-if="prevArticle" :content="prevArticle"></link-block>
        <link-block v-if="nextArticle" :content="nextArticle"></link-block>
        <span>Share this story</span>
      </footer>
    </main>

  </div>
</template>

<style>
p {
  @apply text-neutral-700;
}

h2 {
  @apply mb-4
}

p:not(:last-child) {
  @apply mb-8;
}

img {
  @apply w-full outline outline-1 -outline-offset-1 outline-neutral-700/10 rounded-md;
}
</style>

<script setup>
import users from '~/constants/users';

const route = useRoute();
const article = await queryContent('articles').where({ slug: route.params.slug }).only(['author', 'body', 'createdAt', 'title']).findOne();
const [prevArticle, nextArticle] = await queryContent('articles').where({ type: 'story' }).only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'title']).findSurround(route);
const user = users.find(user => user.handle === route.params.author);
</script>