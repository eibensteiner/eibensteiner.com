<template>
    <div class="p-28">
        <NuxtPage class="max-w-md mx-auto p-4 xl:p-0" />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>