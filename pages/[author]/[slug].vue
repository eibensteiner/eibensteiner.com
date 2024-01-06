<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :entry="entry" />
    <main class="py-6 px-7 border-b border-neutral-100">
      <ButtonScrollToTop />
      <div class="c-content">
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