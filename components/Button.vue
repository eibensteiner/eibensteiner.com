<template>
    <button :class="[type, isIconOnly ? 'icon-only' : '']">{{ label }}</button>
</template>

<style>
.primary {
    @apply h-11 whitespace-nowrap px-6 rounded-full bg-gray-900 text-white shadow-sm;
}

.secondary {
    @apply h-11 whitespace-nowrap px-6 rounded-full outline outline-1 outline-gray-200 shadow-sm hover:bg-gray-50 transition-colors;
}

.icon-only {
    @apply px-0 w-9 h-9;
}
</style>

<script setup>
const props = defineProps(['label', 'type', 'isIconOnly'])
</script>
