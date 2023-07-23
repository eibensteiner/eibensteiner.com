<template>
    <div class="relative">
        <div class="entry-container flex flex-col">
            <Entry v-if="nextEntries" v-for="entry in nextEntries" :content="entry" :user="user"/>
            <Entry v-if="!pending && currentEntries" v-for="entry in currentEntries.results" :content="entry" :user="user"/>
            <EntryPlaceholder v-if="pending" />
        </div>
    </div>
</template>

<style>
.entry-container>*:not(:last-child) {
    @apply border-b border-gray-100;
}
</style>

<script setup>
import { nextEntries } from '~/store/entries.js'
import users from '~/plugins/users.js';

const cursor = ref(undefined);
const route = useRoute().params.user; // Get the user parameter from the current route
const user = users.find(user => user.handle === route); // Find the user object based on the route parameter

// Fetch entries from the Notion API
const {
    pending: pending,
    data: currentEntries,
    refresh: refresh,
    error: error,
} = useLazyAsyncData('currentEntries', () =>
    $fetch(`/api/query-user-entries?cursor=${cursor.value}&user=${user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}`)
)


// Retrigger the API call and load more entries
const loadMore = () => {
    nextEntries.value = [
        ...nextEntries.value,
        ...currentEntries.value.results,
    ]
    cursor.value = currentEntries.value.next_cursor
    refresh();
}

// Load more entries on reaching the bottom of the page
const handleScroll = () => {
    let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight;

    if (bottomOfWindow && currentEntries.value.has_more && !pending.value) {
        loadMore();
    }
};

// Set page metadata and title
useHead({
    title: user.name,
    meta: [
        { name: 'description', content: user.description },
        { hid: 'og-image', property: 'og:image', content: `/img/og/${user.handle}.jpg`},
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ]
})

definePageMeta({
    middleware: 'check-user',
})

// Watch for changes in the currentEntries object
watchEffect(() => {
    if (currentEntries && currentEntries.results) {
        // Handle the changes in the currentEntries object
    }
});

onMounted(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check if the user is already at the bottom of the page when the component mounts
    handleScroll();
});

onUnmounted(() => {
    // Clean up the scroll event listener when the component is unmounted
    window.removeEventListener('scroll', handleScroll);
});

</script>
