<template>
    <header class="p-5 border-b border-gray-100">
        <div class="flex items-center flex-1">
            <div class="w-14 h-14 mr-5 rounded-full overflow-hidden">
                <img class="w-full h-full object-cover" :src="user.avatar_url" />
            </div>
            <div class="flex flex-col">
                <span class="font-medium  leading-6">
                    {{ user.name }}
                </span>
                <span class="font-regular  leading-6 text-gray-600">
                    {{ user.person.email }}
                </span>
            </div>
        </div>
        <div class="flex mt-6">
            <Button :type="'primary'" :label="'Send Message'" class="flex-1 mr-3"></Button>
            <Button :type="'secondary'" :label="'Share Profile'"></Button>
        </div>
    </header>
</template>

<script setup>
const props = defineProps(['user'])
</script>