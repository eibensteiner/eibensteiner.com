<template>
    <button :class="isVisible ? 'vsble' : 'invsble'" @click="scrollToTop"
        class="btn fixed top-24 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-full shadow-sm select-none">Scroll
        To Top</button>
</template>

<style>
.btn {
    @apply h-11 px-6 outline outline-1 bg-white outline-gray-200 hover:bg-gray-50 transition-all;
}

.vsble {
    @apply opacity-100 visible scale-100 translate-y-0;
}

.invsble {
    @apply opacity-0 invisible scale-95 -translate-y-3/4;
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 500;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>