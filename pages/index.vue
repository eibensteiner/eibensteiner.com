<template>
  <div class="min-h-screen sm:border-l sm:border-r border-neutral-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :activeTab="activeTab" :tabs="tabs" @update:activeTab="setActiveTab" />
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
const activeTab = ref('recents'); // Which tab should be initially set to be active?

const tabs = [
    { id: 'recents', label: 'Recents' },
    { id: 'featured', label: 'Featured' },
];

const { data: entries } = useAsyncData(() => {
  return queryContent('entries').only(['author', 'body', 'createdAt', 'type', 'thought', 'slug', 'isPinned', 'isFeatured', 'title', 'image']).sort({ createdAt: -1 }).find();
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
    case 'featured':
      return entries.value.filter(entry => entry.isFeatured === true);
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
      setActiveTab('featured');
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
    title: 'Eibensteiner',
    meta: [
        { name: 'description', content: 'Test test' },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ]
})

</script>