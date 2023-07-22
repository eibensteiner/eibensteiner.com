<template>
    <div class="relative w-10 h-10">
        <nuxt-img class="absolute left-0 top-0 w-8 h-8 rounded-full" :src="src" :alt="alt" fit="cover" format="webp"
            :width="width" :height="height" />
        <div :class="pillBackground" class="pill">
            <icon-calendar v-if="category.name === 'Job'" :color="pillForeground" class="w-4 h-4" />
            <icon-education v-if="category.name === 'Education'" :color="pillForeground" class="w-4 h-4" />
            <icon-leafs v-if="category.name === 'Personal'" :color="pillForeground" class="w-4 h-4" />
            <icon-sparkle v-if="category.name === 'Feature'" :color="pillForeground" class="w-4 h-4" />
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
const pillBackground = color ? color.bg : 'bg-gray-100';
const pillForeground = color ? color.fg : 'text-gray-800';
</script>