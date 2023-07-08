<template>
    <div class="relative min-h-screen">
        <div class="entry-container flex flex-col">
            <Entry v-if="nextEntries" v-for="entry in nextEntries" :content="entry" />
            <Entry v-if="!pending && currentEntries" v-for="entry in currentEntries.results" :content="entry" />
            <template v-if="pending">
                <EntryPlaceholder />
                <EntryPlaceholder class="opacity-70" />
                <EntryPlaceholder class="opacity-40" />
            </template>
        </div>
    </div>
</template>

<style>
.entry-container > *:not(:last-child) {
    @apply border-b border-gray-100;
}
</style>

<script setup>
import { nextEntries } from '~/store/entries.js'
import users from '~/plugins/users.js';

const cursor = ref(undefined);
const route = useRoute().params.user; // Get the user parameter from the current route
const user = users.find(user => user.handle === route); // Find the user object based on the route parameter
const router = useRouter();

// Fetch entries from the Notion API if user.handle exists
const fetchEntries = () => {
  if (user && user.handle) {
    const url = `/api/query-user-entries?cursor=${cursor.value}&user=${user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}`;
    const {
      pending: pending,
      data: currentEntries,
      refresh: refresh,
      error: error,
    } = useLazyAsyncData('currentEntries', () => $fetch(url));

    return { pending, currentEntries, refresh, error };
  } else {
    router.replace('/404'); // Redirect to the 404 page
    return { pending: false, currentEntries: { results: [] }, refresh: null, error: null };
  }
};

// Fetch entries from the Notion API
const {
  pending,
  currentEntries,
  refresh,
  error,
} = fetchEntries();

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
