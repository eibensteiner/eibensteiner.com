<template>
    <div class="relative min-h-screen">
        <Header :user="user" />
        <div class="entry-container flex flex-col">
            <Entry v-if="postsToRemain" v-for="post in postsToRemain" :post="post" />
            <Entry v-if="!pending" v-for="post in postsFromNotion.results" :post="post" />
            <template v-if="pending">
                <EntryPlaceholder />
                <EntryPlaceholder class="opacity-70" />
                <EntryPlaceholder class="opacity-40" />
            </template>
        </div>
    </div>
</template>

<style>
.entry-container>*:not(:last-child) {
    @apply border-b border-gray-100;
}
</style>

<script setup>
import { postsToRemain } from '~/store/entries.js'
import users from '~/plugins/users.js';

const cursor = ref(undefined);
const route = useRoute().params.user;
const user = users.find(concreteUser => concreteUser.handle === route);

// Fetch posts from the Notion API
const {
    pending: pending,
    data: postsFromNotion,
    refresh: refresh,
    error: error,
} = useLazyAsyncData('postsFromNotion', () =>
    $fetch(`/api/query-user-entries?cursor=${cursor.value}&user=${route.charAt(0).toUpperCase() + route.slice(1)}`)
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

// Load more posts on reaching the bottom of the page
const handleScroll = () => {
    let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight;

    if (bottomOfWindow && postsFromNotion.value.has_more && !pending.value) {
        loadMore();
    }
};

onMounted(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check if the user is already at the bottom of the page when the component mounts
    handleScroll();
});

// Clean up the scroll event listener when the component is unmounted
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>
