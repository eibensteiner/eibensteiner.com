<template>
    <div class="relative min-h-screen">
        <div class="flex flex-col">
            <BlogPost v-if="!pendingHeader && !errorHeader" :post="header" />
            <BlogPostPlaceholder v-else />
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const {
    data: header,
    pending: pendingHeader,
    refresh: refreshHeader,
    error: errorHeader,
} = await useLazyAsyncData('header', () =>
    $fetch(`/api/notion/retrieve-page/${route.params.post}`)
)

refreshHeader()
</script>
