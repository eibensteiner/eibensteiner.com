<template>
    <button class="c-button c-button-secondary c-button-icon-only" @click="goToParent">←</button>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const goToParent = () => {
    const pathSegments = route.path.split('/').filter(Boolean);
    const newPath = pathSegments.slice(0, -1).join('/');

    router.push('/' + newPath);
}
</script>