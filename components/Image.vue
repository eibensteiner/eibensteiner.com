<template>
    <div class="c-border-transparent">
        <nuxt-img class="w-full h-full object-cover bg-gray-50 select-none" :src="src" :alt="alt" loading="lazy" fit="cover" format="webp"/>
    </div>
</template>

<script setup>
const props = defineProps(['src', 'alt'])
</script>