<template>
    <div class="relative min-h-screen">
        <Header :user="filteredPosts[0].properties.Author.people[0]"/>
        <div class="flex flex-col">
            <BlogPostSmall v-if="!pending" v-for="post in filteredPosts" :post="post" />
            <BlogPostSmallPlaceholder v-else v-for="el in [1, 2, 3]" />
        </div>
    </div>
</template>

<script setup>

// API Cursor for getting next articles
const cursor = ref(undefined)
const route = useRoute();
const user = route.params.user;

// Fetch all the posts from Notion (Async)
const {
    pending,
    data: postsFromNotion,
} = useLazyAsyncData('postsFromNotion', () =>
    $fetch(`/api/notion/query-database?cursor=${cursor.value}`)
)

// Go through all the posts and filter out the posts with a specific author.
const filteredPosts = computed(() => {
    // Get all posts currently loaded
    let posts = [...postsFromNotion.value.results];

    return posts = posts.filter((post) => {
        return post.properties.Author.people[0].name === user.charAt(0).toUpperCase() + user.slice(1) + ' Eibensteiner';
    });
})
</script>
