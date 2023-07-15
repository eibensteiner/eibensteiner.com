<template>
    <div class="mx-auto w-full h-screen flex flex-col items-center py-20">
        <h1 class="text-xl">{{ error.message }}</h1>
    </div>
</template>

<script setup>
const props = defineProps(['error'])
</script>