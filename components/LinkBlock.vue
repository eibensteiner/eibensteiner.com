<template>
    <nuxt-link :to="`/${content.author}/${content.slug}`"
        class="group h-22 flex outline outline-1 outline-neutral-700/10 rounded-xl bg-white hover:bg-neutral-50 transition-colors drop-shadow-sm overflow-hidden">
        <div class="h-full flex flex-col justify-center flex-1 py-5 px-6">
            <span class="mb-0.5 text-neutral-900">{{ content.title }}</span>
            <span class="text-neutral-700">{{ readingTime }}</span>
        </div>
        <div v-if="imageSources" class="h-full w-24 bg-neutral-100 flex items-center justify-center relative select-none">
            <div class="group-hover:scale-105 transition-transform">
                <nuxt-img class="image -rotate-6 group-hover:-rotate-12 z-10" :src="imageSources[0]" fit="cover" format="webp"
                    quality="20" width="104" height="104" />
                <nuxt-img v-if="imageSources.length > 1" class="image rotate-3 group-hover:rotate-6" :src="imageSources[1]"
                    fit="cover" format="webp" quality="20" width="104" height="104" />
            </div>
        </div>
    </nuxt-link>
</template>

<style>
.image {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-14 w-auto max-h-14 h-auto outline outline-1 -outline-offset-1 outline-neutral-700/10 rounded-md transition-transform shadow-sm;
}
</style>

<script setup>
import { extractTextFromContent, extractImagesFromContent } from '~/utils/extractDataFromContent';

const props = defineProps(['content'])
const imageSources = extractImagesFromContent(props.content.body);

const readingTime = computed(() => {
    const wordsPerMinute = 200; // Average reading speed
    const textContent = extractTextFromContent(props.content.body);
    const words = textContent.split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
});
</script>