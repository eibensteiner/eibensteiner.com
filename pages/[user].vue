<template>
    <div class="relative min-h-screen" @scroll="onScroll">
        <Header :user="filteredPosts[0].properties.Author.people[0]" />
        <div class="flex flex-col">
            <BlogPost v-for="post in postsToRemain" :post="post" />
            <BlogPost v-if="!pending" v-for="post in postsFromNotion.results" :post="post" />
            <BlogPostPlaceholder v-if="pending" v-for="el in [1, 2, 3]" />
        </div>
    </div>
</template>

<script setup>
import { postsToRemain } from '~/store/posts.js'

const cursor = ref(undefined) // Cursor to define the page position 
const route = useRoute();
const user = route.params.user;

// Fetch posts from the Notion API
const {
    pending: pending,
    data: postsFromNotion,
    refresh: refresh,
    error: error,
} = useLazyAsyncData('postsFromNotion', () =>
    $fetch(`/api/query-user-posts?cursor=${cursor.value}&user=${user.charAt(0).toUpperCase() + user.slice(1)}`)
)

watch(postsFromNotion, () => { })

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

onMounted(() => {
    // Load more posts on reaching the bottom of the page
    window.onscroll = () => {
        let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow && postsFromNotion.value.has_more && !pending.value) {
            loadMore();
        }
    }
});

</script>
