<template>
    <div class="border-l border-r border-gray-100 mx-auto max-w-xl w-full">
        <Navigation :handle="$route.params.user"></Navigation>
        <NuxtPage />
        <ButtonScrollToTop></ButtonScrollToTop>
    </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>