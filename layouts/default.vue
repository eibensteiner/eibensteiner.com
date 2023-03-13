<template>
    <div class="p-28 relative">
        <NuxtPage class="max-w-md mx-auto p-4 xl:p-0" />
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