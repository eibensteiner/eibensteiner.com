<template>
    <button :class="[type, isIconOnly ? 'icon-only' : '']" class="font-medium leading-6">{{ label }}</button>
</template>

<style>
.primary {
    @apply h-11 whitespace-nowrap px-6 rounded-full bg-gray-900 text-white;
}

.secondary {
    @apply h-11 whitespace-nowrap px-6 rounded-full outline outline-gray-200 shadow-sm;
}

.icon-only {
    @apply px-0 w-9 h-9;
}
</style>

<script setup>
const props = defineProps(['label', 'type', 'isIconOnly'])
</script>
