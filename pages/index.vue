<template>
  <div class="relative">
    <!-- Tab buttons -->
    <nav class="w-full h-22 border-b border-gray-100 sticky top-0 bg-white z-20 flex items-center justify-center px-6">
      <button class="w-28 h-10 rounded-full" :class="activeTab === 'recents' ? 'bg-gray-100' : 'text-gray-600'" @click="setActiveTab('recents')">Recents</button>
      <button class="w-28 h-10 rounded-full" :class="activeTab === 'stories' ? 'bg-gray-100' : 'text-gray-600'" @click="setActiveTab('stories')">Stories</button>
      <button class="w-28 h-10 rounded-full" :class="activeTab === 'thoughts' ? 'bg-gray-100' : 'text-gray-600'" @click="setActiveTab('thoughts')">Thoughts</button>
    </nav>

    <!-- Entries list -->
    <div class="entry-container flex flex-col">
      <Entry v-for="article in filteredArticles" :key="article.slug" :content="article" :showPinned="false"/>
    </div>
  </div>
</template>

<style>
.entry-container>*:not(:last-child) {
  @apply border-b border-gray-100;
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