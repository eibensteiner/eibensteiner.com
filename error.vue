<template>
    <div class="sm:border-l sm:border-r border-gray-100 mx-auto sm:max-w-xl w-full">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['error'])
</script>