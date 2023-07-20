<template>
    <nav class="w-full h-22 border-b border-gray-100 sticky top-0 bg-white z-20 flex items-center px-6">
        <ButtonGoToParent />
        <span class="ml-4">@{{ handle }}</span>
    </nav>
</template>

<script setup>
const props = defineProps(['handle'])
</script>