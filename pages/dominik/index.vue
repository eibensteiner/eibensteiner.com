<template>
    <div class="border-l border-r border-gray-100 mx-auto max-w-xl w-full relative min-h-screen">
        <Navigation></Navigation>
        <main>
            <Header :name="'Dominik Eibensteiner'" :description="'Product Designer from Austria'"
                :email="'dominik.eibensteiner@outlook.com'"
                :avatar="filteredPosts[0].properties.Author.people[0].avatar_url"></Header>
            <div class="flex flex-col">
                <BlogPostSmall v-if="!pending" v-for="post in filteredPosts" :post="post" :user="user" />
                <BlogPostSmallPlaceholder v-else v-for="el in [1, 2, 3]" />
            </div>
        </main>
    </div>
</template>

<script setup>

// API Cursor for getting next articles
const cursor = ref(undefined)
const user = 'dominik';

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
