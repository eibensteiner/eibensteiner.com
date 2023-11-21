<template>
        <nuxt-img class="outline outline-1 -outline-offset-1 outline-neutral-700/10 h-96 w-full" :src="src" :alt="alt" loading="lazy" fit="cover" format="webp"
            :width="width" :height="height" />
</template>

<script setup>
const props = defineProps(['src', 'alt', 'width', 'height'])
</script>