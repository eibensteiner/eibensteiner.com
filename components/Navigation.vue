<template>
    <nav class="w-full h-22 border-b border-neutral-100 sticky top-0 bg-white z-20 flex items-center px-7">
        <ButtonGoToParent />
        <span v-if="user && !article" class="ml-4">
            <span class="text-neutral-900">{{ user.firstname }} {{ user.lastname }}</span>
            <span class="ml-1.5 leading-6 text-neutral-700">@{{ user.handle }}</span>
        </span>
        <span v-if="article" class="ml-4 text-neutral-900">{{ article.title }}</span>
    </nav>
</template>

<script setup>
const props = defineProps(['user', 'article']);
</script>