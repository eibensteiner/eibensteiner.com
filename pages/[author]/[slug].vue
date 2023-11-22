<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :entry="entry" />
    <main class="py-6 px-7">
      <ButtonScrollToTop />
      <ContentRenderer :value="entry">
        <ContentRendererMarkdown :value="entry" />
      </ContentRenderer>
      <footer class="mt-8">
        <span>Explore more from {{ user.firstname }}</span>
        <link-block v-if="preventry" :content="preventry"></link-block>
        <link-block v-if="nextentry" :content="nextentry"></link-block>
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
const entry = await queryContent('entries').where({ slug: route.params.slug }).only(['author', 'body', 'createdAt', 'title']).findOne();
const [preventry, nextentry] = await queryContent('entries').where({ type: 'story' }).only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'title']).findSurround(route);
const user = users.find(user => user.handle === route.params.author);
</script>