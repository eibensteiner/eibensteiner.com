<template>
    <div class="c-border-transparent">
        <img class="w-full h-full object-cover bg-gray-50 select-none" loading="lazy" :src="src" :alt="alt" />
    </div>
</template>

<script setup>
const props = defineProps(['src', 'alt'])
</script>