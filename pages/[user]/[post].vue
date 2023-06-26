<template>
    <div>
        <div class=" breadcrumbs">
            <ul>
                <li>
                    <NuxtLink to="/">Main page</NuxtLink>
                </li>
                <li v-if="!pendingHeader">
                    {{ header.properties.Title.title[0].text.content }}
                </li>
            </ul>
        </div>
        <BlogPost v-if="!pendingHeader && !errorHeader" :header="header" />
        <BlogPostPlaceholder v-else />
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const {
    data: header,
    pending: pendingHeader,
    refresh: refreshHeader,
    error: errorHeader,
} = await useLazyAsyncData('header', () =>
    $fetch(`/api/notion/retrieve-page/${route.params.post}`)
)

const goBack = () => {
    router.go(-1)
}
refreshHeader()
</script>
