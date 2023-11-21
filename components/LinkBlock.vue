<template>
    <nuxt-link :to="link"
        class="group mt-2 h-22 flex outline outline-1 outline-neutral-700/10 rounded-xl bg-white hover:bg-neutral-50 transition-colors drop-shadow-sm overflow-hidden">
        <div class="h-full flex flex-col justify-center flex-1 p-5">
            <span class="mb-0.5 text-neutral-900">{{ title }}</span>
            <span class="text-neutral-700">{{ readingTime }}</span>
        </div>
        <div class="h-full w-28 bg-neutral-100 flex items-center justify-center relative">
            <nuxt-img
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 rounded-md -rotate-6 group-hover:-rotate-12 transition-transform shadow-sm z-10"
                :src="images[0]" fit="cover" format="webp" />
            <nuxt-img v-if="images.length > 1"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 rounded-md rotate-6 group-hover:rotate-12 transition-transform shadow-sm"
                :src="images[1]" fit="cover" format="webp" />
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps(['link', 'images', 'title', 'readingTime'])
</script>