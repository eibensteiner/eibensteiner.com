<template>
    <nuxt-link :to="link" class="mt-2 h-22 flex border rounded-xl shadow-sm overflow-hidden">
        <div class="h-full flex flex-col justify-center flex-1 p-5">
            <span class="mb-0.5">{{ title }}</span>
            <span class=" text-gray-600">{{ readingTime }}</span>
        </div>
        <div class="h-full w-28 bg-gray-50 flex items-center justify-center">
            <nuxt-img class="w-16 h-12 rounded-md -rotate-3 shadow-sm"
            :src="`/img/articles/${img}.jpg`" fit="cover" format="webp"/>
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps(['link', 'img', 'title', 'readingTime'])
</script>