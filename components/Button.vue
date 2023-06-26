<template>
    <button class="whitespace-nowrap rounded-full shadow-sm select-none" @click="$emit('click')" :class="[type, isIconOnly ? 'icon-only' : '']">{{ label }}</button>
</template>

<style>
.primary {
    @apply h-11 px-6 bg-gray-900 text-white;
}

.secondary {
    @apply h-11 px-6 outline outline-1 bg-white outline-gray-200 hover:bg-gray-50 transition-colors;
}

.icon-only {
    @apply px-0 w-9 h-9;
}
</style>

<script setup>
const props = defineProps(['label', 'type', 'isIconOnly'])
</script>
