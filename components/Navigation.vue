<template>
    <nav class="w-full h-22 border-b border-neutral-100 sticky top-0 bg-white z-20 flex items-center px-7"
        :class="tabs && activeTab ? 'justify-center' : ''">
        <template v-if="tabs && activeTab">
            <button v-for="tab in tabs" :key="tab.id"
                class="w-28 h-10 rounded-full hover:text-neutral-900 transition-colors"
                :class="activeTab === tab.id ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700'"
                @click="changeTab(tab.id)">
                {{ tab.label }}
            </button>
        </template>
        <template v-else>
            <ButtonGoToParent />
            <span v-if="user && !entry" class="ml-4">
                <span class="text-neutral-900">{{ user.firstname }} {{ user.lastname }}</span>
                <span class="ml-1.5 leading-6 text-neutral-700">@{{ user.handle }}</span>
            </span>
            <span v-if="entry" class="ml-4 text-neutral-900">{{ entry.title }}</span>
        </template>
    </nav>
</template>

<script setup>
const props = defineProps(['user', 'entry', 'activeTab', 'tabs']);
const emits = defineEmits(['update:activeTab']);

const changeTab = (tabId) => {
    emits('update:activeTab', tabId);
};
</script>