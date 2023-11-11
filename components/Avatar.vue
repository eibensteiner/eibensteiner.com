<template>
    <div class="relative w-10 h-10">
        <nuxt-img class="absolute left-0 top-0 w-8 h-8 rounded-full" :src="src" :alt="alt" fit="cover" format="webp"
            :width="width" :height="height" />
        <div :class="'bg-gray-100'" class="pill">
            <icon-smile v-if="category.name === 'Project'" :color="pillForeground" class="w-3.5 h-3.5" />
            <icon-family v-else-if="category.name === 'Family'" :color="pillForeground" class="w-3.5 h-3.5" />
            <icon-education v-else-if="category.name === 'Education'" :color="pillForeground" class="w-3.5 h-3.5" />
            <icon-leafs v-else-if="category.name === 'Growth'" :color="pillForeground" class="w-3.5 h-3.5" />
            <icon-sparkle v-else-if="category.name === 'Feature'" :color="pillForeground" class="w-3.5 h-3.5" />
            <icon-clock v-else :color="pillForeground" class="w-3.5 h-3.5" />
        </div>
    </div>
</template>

<style>
.pill {
    @apply absolute flex items-center justify-center w-5.5 h-5.5 bottom-0 right-0 rounded-full outline-1 outline outline-white;
}
</style>

<script setup>
import colors from '~/plugins/colors.js';

const props = defineProps(['src', 'alt', 'width', 'height', 'category'])
const color = colors.find(color => color.name === props.category.color);
const pillBackground = color ? color.bg : 'bg-gray-200';
const pillForeground = color ? color.fg : 'text-gray-800';
</script>