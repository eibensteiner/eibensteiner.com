<template>
    <div class="relative w-9 h-9">
        <nuxt-img class="absolute left-0 top-0 w-9 h-9 rounded-full" :src="src" :alt="alt" fit="cover" format="webp"
            :width="width" :height="height" />
    </div>
</template>

<style>
.pill {
    @apply absolute flex items-center justify-center w-5.5 h-5.5 bottom-0 right-0 rounded-full outline-1 outline outline-white;
}
</style>

<script setup>
const props = defineProps(['src', 'alt', 'width', 'height', 'isPinned'])
</script>