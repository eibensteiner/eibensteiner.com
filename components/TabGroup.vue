<template>
    <div class="flex w-full max-w-xs">
        <button v-for="tab in tabs" :key="tab.id" class="flex-1 h-10 rounded-full hover:text-neutral-900 transition-colors px-4 truncate"
            :class="activeTab === tab.id ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700'"
            @click="changeTab(tab.id)">
            {{ tab.label }}
        </button>
    </div>
</template>
  
<script setup>
const props = defineProps(['tabs', 'activeTab']);
const emits = defineEmits(['update:activeTab']);

const changeTab = (tabId) => {
    emits('update:activeTab', tabId);
};
</script>