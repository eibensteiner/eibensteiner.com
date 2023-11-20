<template>
    <nav class="w-full h-22 border-b border-gray-100 sticky top-0 bg-white z-20 flex items-center justify-center px-6">
      <button v-for="tab in tabs" :key="tab.id" class="w-28 h-10 rounded-full"
              :class="activeTab === tab.id ? 'bg-gray-100' : 'text-gray-600'"
              @click="changeTab(tab.id)">
        {{ tab.label }}
      </button>
    </nav>
  </template>
  
  <script setup>
  
  const props = defineProps(['activeTab']);
  
  const emits = defineEmits(['update:activeTab']);
  
  const tabs = [
    { id: 'recents', label: 'Recents' },
    { id: 'stories', label: 'Stories' },
    { id: 'thoughts', label: 'Thoughts' }
  ];
  
  const changeTab = (tabId) => {
    emits('update:activeTab', tabId);
  };
  </script>