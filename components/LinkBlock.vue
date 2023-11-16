<template>
    <nuxt-link :to="link" class="mt-2 h-22 flex border rounded-xl shadow-sm overflow-hidden">
        <div class="h-full flex-1 p-5">
            <span>{{ title }}</span>
        </div>
        <div class="h-full w-28 bg-gray-50">
            {{ img }}
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps(['link', 'img', 'title', 'readingTime'])
</script>