<template>
    <div class="c-border-transparent">
        <nuxt-img class="object-cover bg-gray-50 select-none h-96 w-full" :src="src" :alt="alt" loading="lazy" fit="cover" format="webp"
            :width="width" :height="height" />
    </div>
</template>

<script setup>
const props = defineProps(['src', 'alt', 'width', 'height'])
</script>