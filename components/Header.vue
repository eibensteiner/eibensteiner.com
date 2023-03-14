<template>
    <header class="flex items-center flex-1 p-5">
        <div class="w-12 h-12 mr-5 rounded-full c-border-transparent">
            <img class="w-full h-full object-cover"
                 :src="user.avatar_url" />
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