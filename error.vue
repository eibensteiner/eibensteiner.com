<template>
    <div class="mx-auto w-full h-screen flex flex-col items-center py-20">
        <div
            class="flex items-center justify-center w-9 h-9 outline outline-1 outline-gray-200 shadow-sm rounded-lg bg-gray-50 mb-4">
            <span class="select-none">🚧</span>
        </div>
        <h1 class="text-xl">{{ error.message }}</h1>
    </div>
</template>

<script setup>
const props = defineProps(['error'])
</script>