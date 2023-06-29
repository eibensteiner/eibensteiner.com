<template>
    <div class="relative min-h-screen">
        <Header :user="filteredPosts[0].properties.Author.people[0]" />
        <div class="flex flex-col">
            <BlogPost v-for="post in postsToRemain" :post="post" />
            <BlogPost v-if="!pending" v-for="post in postsFromNotion.results" :post="post" />
            <BlogPostPlaceholder v-if="pending" v-for="el in [1, 2, 3]" />
        </div>
        <button class="btn btn-block btn-primary" :class="pending || !postsFromNotion.has_more ? 'invisible' : 'visible'"
            @click="loadMore">
            <span>Load more</span>
        </button>
    </div>
</template>

<script setup>
import { postsToRemain } from '~/store/posts.js'

// API Cursor for getting next articles
const cursor = ref(undefined)
const route = useRoute();
const user = route.params.user;

// Fetch all the posts from Notion (Async)
const {
    pending,
    data: postsFromNotion,
    refresh,
} = useLazyAsyncData('postsFromNotion', () =>
    $fetch(`/api/notion/query-user-posts?cursor=${cursor.value}&user=${user.charAt(0).toUpperCase() + user.slice(1)}`)
)

const loadMore = () => {
    postsToRemain.value = [
        ...postsToRemain.value,
        ...postsFromNotion.value.results,
    ]
    cursor.value = postsFromNotion.value.next_cursor
    refresh()
}

// Go through all the posts and filter out the posts with a specific author.
const filteredPosts = computed(() => {
    // Get all posts currently loaded
    let posts = [...postsToRemain.value, ...postsFromNotion.value.results]

    return posts;
})
</script>
