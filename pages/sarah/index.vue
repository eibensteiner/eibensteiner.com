<template>
    <div class="max-w-full">
        <Header class="mb-5"
                :user="filteredPosts[0].properties.Author.people[0]"></Header>
        <div class="flex flex-col gap-4">
            <BlogPostSmall v-if="!pending"
                           v-for="post in filteredPosts"
                           :post="post"
                           :user="user" />
            <BlogPostSmallPlaceholder v-else
                                      v-for="el in [1, 2, 3]" />
        </div>
    </div>
</template>

<script setup>

// API Cursor for getting next articles
const cursor = ref(undefined)
const user = 'sarah';

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
