<template>
    <nuxt-link :to="`/${user}`" class="group relative w-10 h-10 hover:scale-105 transition-transform select-none">
        <nuxt-img :class="isPinned ? 'w-8 h-8' : 'w-10 h-10'" class="absolute left-0 top-0 outline outline-1 -outline-offset-1 outline-neutral-700/10 rounded-full"
            :src="`/img/users/${user}.jpg`" :alt="user" fit="cover" format="webp" :width="width" :height="height" />
        <div v-if="isPinned" class="pill bg-neutral-100 group-hover:rotate-12 transition-transform">
            <icon-pin class="w-3.5 h-3.5" />
        </div>
    </nuxt-link>
</template>

<style>
.pill {
    @apply absolute flex items-center justify-center w-6 h-6 bottom-0 right-0 rounded-full outline outline-white;
}
</style>

<script setup>
const props = defineProps(['src', 'user', 'width', 'height', 'isPinned'])
</script>