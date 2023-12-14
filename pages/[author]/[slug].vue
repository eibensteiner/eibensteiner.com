<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :entry="entry" />
    <main class="py-6 px-7 border-b border-neutral-100">
      <ButtonScrollToTop />
      <div class="content">
        <ContentRenderer :value="entry">
          <ContentRendererMarkdown :value="entry" />
        </ContentRenderer>
      </div>
      <div class="flex mt-8">
        <div class="h-12 my-px flex items-center justify-center mr-4">
          <Avatar :width="150" :height="150" :user="entry.author" :isPinned="entry.isPinned" />
        </div>
        <div class="flex flex-col">
          <nuxt-link :to="`/${entry.author}`" class="text-neutral-900 mb-0.5">{{ user.firstname }} {{ user.lastname
          }}</nuxt-link>
          <span class="text-neutral-700">Published {{ relativeDate }} ago</span>
        </div>
      </div>
    </main>
    <footer class="py-6 px-7">
      <link-block v-if="nextentry" :content="nextentry"></link-block>
      <link-block v-if="preventry" :content="preventry"></link-block>
    </footer>
  </div>
</template>

<style>
.content p {
  @apply text-neutral-700;
}

.content > div > *:first-child {
  @apply mt-0;
}

.content p:not(:last-child) {
  @apply mb-4;
}

.content p strong,
.content p em,
.content blockquote p {
  @apply text-neutral-900 font-serif italic;
}

.content p a {
  @apply text-neutral-900 underline decoration-dashed decoration-neutral-300 underline-offset-4 decoration-1 hover:text-black hover:decoration-neutral-400 transition-colors;
}

.content img {
  @apply w-full outline outline-1 -outline-offset-1 outline-neutral-700/10 rounded-md my-8 bg-neutral-100;
}

.content blockquote {
  @apply my-5 pl-4 border-l-2 border-neutral-600;
}

.content ul, .content ol {
  @apply my-6;
}

.content li {
  @apply flex my-1;
}

.content li input[type="checkbox"] {
  @apply mr-2 w-4 h-4 rounded appearance-none inline-flex justify-center items-center outline outline-1 outline-neutral-900/10 checked:bg-neutral-700 disabled:cursor-not-allowed checked:before:content-['✓'] text-xs text-white -outline-offset-1 my-1 flex-none;
}

</style>

<script setup>
import users from '~/constants/users';
import { getRelativeDate } from '~/utils/getReadableDate';

const route = useRoute();
const entry = await queryContent('entries').where({ slug: route.params.slug }).only(['author', 'body', 'createdAt', 'title']).findOne();
const [preventry, nextentry] = await queryContent('entries').where({ type: 'story' }).only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'title']).findSurround(route.params);
const relativeDate = getRelativeDate(entry.createdAt);
const user = users.find(user => user.handle === route.params.author);

// Set page metadata and title
useHead({
  title: entry.title,
  meta: [
    { name: 'description', content: user.description },
    { hid: 'og-image', property: 'og:image', content: `/img/og/${user.handle}.jpg` },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>