<template>
    <nav class="w-full h-22 border-b border-gray-100 sticky top-0 bg-white z-20 flex items-center px-6">
        <ButtonGoToParent />
        <span class="ml-4">@{{ $route.params }}</span>
    </nav>
</template>

<script setup>
const route = useRoute();
const params = route.params;
</script>