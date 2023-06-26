<template>
    <header class="p-5 border-b border-gray-100">
        <div class="flex items-center flex-1">
            <Image class="w-14 h-14 mr-5 rounded-full" :src="user.avatar_url"></Image>
            <div class="flex flex-col">
                <span>{{ user.name }}</span>
                <span class="text-gray-600">{{ user.person.email }}</span>
            </div>
        </div>
        <div class="flex mt-6">
            <Button :type="'primary'" :label="'Send Message'" class="flex-1 mr-3"></Button>
            <ButtonCopyToClipboard :type="'secondary'" :label="'Share Profile'" :clipboard-text="user.person.email"></ButtonCopyToClipboard>
        </div>
    </header>
</template>

<script setup>
const props = defineProps(['user'])
</script>