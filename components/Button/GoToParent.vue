<template>
    <Tooltip :text="'Awesomeness in the making'" :direction="'bottom'">
        <button class="button secondary icon-only" @click="goToParent" disabled>←</button>
    </Tooltip>
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