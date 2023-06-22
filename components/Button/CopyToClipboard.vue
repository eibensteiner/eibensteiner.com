<template>
    <button class="whitespace-nowrap rounded-full shadow-sm select-none relative" @click="copyToClipboard(clipboardText)"
        :class="type">{{ label }}<span class="absolute left-1/2 -translate-x-1/2 bg-white" :class="feedbackIsVisible ? 'visible' : 'invisible'">Copied</span></button>
</template>

<style>
.primary {
    @apply h-11 px-6 bg-gray-900 text-white;
}

.secondary {
    @apply h-11 px-6 outline outline-1 bg-white outline-gray-200 hover:bg-gray-50 transition-colors;
}
</style>

<script setup>
const props = defineProps(['label', 'type', 'clipboardText'])
let feedbackIsVisible = useState(() => false);

const copyToClipboard = (message, event) => {
    navigator.clipboard.writeText(message);
    
    feedbackIsVisible.value = true;

    setTimeout(() => {
        feedbackIsVisible.value = false;
        
    }, 3000);

}
</script>