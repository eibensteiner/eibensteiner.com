<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <NavigationTabs :activeTab="activeTab" @update:activeTab="setActiveTab" />

    <!-- Entries list -->
    <div class="feed flex flex-col">
      <ButtonScrollToTop />
      <Entry v-for="article in filteredArticles" :key="article.slug" :content="article" :showPinned="false" />
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
const articles = ref([]);

// Fetch articles on mounted
onMounted(async () => {
  articles.value = await queryContent('articles').find();
});

// Method to set the active tab
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Computed property to filter articles based on the active tab
const filteredArticles = computed(() => {
  switch (activeTab.value) {
    case 'recents':
      return articles.value;
    case 'stories':
      return articles.value.filter(article => article.type === 'story');
    case 'thoughts':
      return articles.value.filter(article => article.type === 'thought');
    default:
      return articles.value;
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

</script>