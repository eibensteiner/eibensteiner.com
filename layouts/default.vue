<template>
    <div class="border-l border-r border-gray-100 mx-auto max-w-xl w-full">
        <Navigation :handle="$route.params.user" />
        <NuxtPage />
        <ButtonScrollToTop />
    </div>
</template>