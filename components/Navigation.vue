<template>
    <nav class="h-22 border-b border-neutral-100 sticky top-0 bg-white z-20 flex items-center px-7"
        :class="tabs && activeTab ? 'justify-center' : ''">
        <TabGroup v-if="tabs && activeTab" :tabs="tabs" :activeTab="activeTab" @update:activeTab="changeTab" />
        <template v-else>
            <ButtonGoToParent />
            <span v-if="user && !entry" class="ml-4 whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                <span class="text-neutral-900">{{ user.firstname }} {{ user.lastname }}</span>
                <span class="ml-1.5 text-neutral-700">@{{ user.handle }}</span>
            </span>
            <span v-if="entry" class="ml-4 text-neutral-900 whitespace-nowrap overflow-hidden text-ellipsis flex-1">{{
                entry.title }}</span>
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