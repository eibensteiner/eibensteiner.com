<template>
    <div>
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