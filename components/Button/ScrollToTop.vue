<template>
    <button
        :class="isVisible ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-3/4'"
        @click="scrollToTop"
        class="c-button c-button-secondary c-button-overlay fixed top-24 left-1/2 -translate-x-1/2">Scroll
        To Top</button>
</template>

<script setup>
// Create a reactive variable to track the visibility status
const isVisible = ref(false);

// Define a function to handle scroll events
const handleScroll = () => {
    // Update the visibility status based on the scroll position
    isVisible.value = window.scrollY > 500;
};

// Define a function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Register the scroll event listener when the component is mounted
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Unregister the scroll event listener before the component is unmounted
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>