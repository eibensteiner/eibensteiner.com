<template>
    <header class="p-5 border-b border-gray-100">
        <div class="flex items-center flex-1">
            <Image class="w-14 h-14 mr-5 rounded-full" :src="avatar"></Image>
            <div class="flex flex-col">
                <span>{{ name }}</span>
                <span class="text-gray-600">{{ description }}</span>
            </div>
        </div>
        <div class="flex mt-6">
            <Button :type="'primary'" :label="'Send Message'" class="flex-1 mr-3"></Button>

            <Tooltip :text="'Test'">
                <Button :type="'secondary'" :label="'Share Profile'" :clipboard-text="email"></Button>
            </Tooltip>
        </div>
    </header>
</template>

<script setup>
const props = defineProps(['name', 'description', 'email', 'avatar'])
</script>