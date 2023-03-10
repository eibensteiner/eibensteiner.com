<template>
    <header class="flex items-center flex-1 p-5">
        <div class="relative w-12 h-12 mr-5">
            <img class="w-full h-full rounded-full object-cover" :src="user.avatar_url"/>
            <div class="absolute left-0 top-0 right-0 bottom-0 rounded-full border border-black border-opacity-5"></div>
        </div>
        <div class="flex flex-col">
            <span class="font-medium text-sm leading-6">
                {{ user.name }}
            </span>
            <span class="font-regular text-sm leading-6 text-gray-600">
                {{ user.person.email }}
            </span>
        </div>
    </header>
</template>

<script setup>
const props = defineProps(['user'])
</script>