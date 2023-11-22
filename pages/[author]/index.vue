<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user"/>
    <div class="feed flex flex-col">
      <ButtonScrollToTop />
      <Entry v-for="entry in pinnedentries" :key="entry.id" :content="entry" :isPinned="true" />

      <!-- Render unpinned entries -->
      <Entry v-for="entry in unpinnedentries" :key="entry.id" :content="entry" />
    </div>
  </div>
</template>
  
<style>
.feed>*:not(:last-child) {
  @apply border-b border-neutral-100;
}
</style>

<script setup>
import users from '~/constants/users';

const route = useRoute();
const allentries = await queryContent('entries').where({ author: route.params.author }).only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'isPinned', 'title']).find();
const user = users.find(user => user.handle === route.params.author);

const pinnedentries = computed(() => allentries.filter(entry => entry.isPinned));
const unpinnedentries = computed(() => allentries.filter(entry => !entry.isPinned));

// Set page metadata and title
useHead({
    title: user.fistname,
    meta: [
        { name: 'description', content: user.description },
        { hid: 'og-image', property: 'og:image', content: `/img/og/${user.handle}.jpg`},
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ]
})

definePageMeta({
    middleware: 'check-user',
})
</script>