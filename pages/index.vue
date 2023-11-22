<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <NavigationTabs :activeTab="activeTab" @update:activeTab="setActiveTab" />
    <!-- Entries list -->
    <div class="feed flex flex-col">
      <ButtonScrollToTop />
      <Entry v-for="entry in filteredentries" :key="entry.slug" :content="entry" />
    </div>
  </div>
</template>

<style>
.feed>*:not(:last-child) {
  @apply border-b border-neutral-100;
}
</style>

<script setup>
const activeTab = ref('recents');
const entries = ref([]);

// Fetch entries on mounted
onMounted(async () => {
  entries.value = await queryContent('entries').only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'isPinned', 'title']).find();
  console.log(entries.value);
});

// Method to set the active tab
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Computed property to filter entries based on the active tab
const filteredentries = computed(() => {
  switch (activeTab.value) {
    case 'recents':
      return entries.value;
    case 'stories':
      return entries.value.filter(entry => entry.type === 'story');
    case 'thoughts':
      return entries.value.filter(entry => entry.type === 'thought');
    default:
      return entries.value;
  }
});

// Handle keyboard shortcuts
function handleKeyShortcuts(event) {
  const isCmdOrCtrl = event.metaKey || event.ctrlKey;
  if (!isCmdOrCtrl) return;

  switch (event.key) {
    case '1':
      setActiveTab('recents');
      break;
    case '2':
      setActiveTab('stories');
      break;
    case '3':
      setActiveTab('thoughts');
      break;
  }
}

// Register and unregister event listener
onMounted(() => {
  window.addEventListener('keydown', handleKeyShortcuts);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyShortcuts);
});

// Set page metadata and title
useHead({
    title: 'eibensteiner.com',
    meta: [
        { name: 'description', content: 'Test test' },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ]
})

</script>