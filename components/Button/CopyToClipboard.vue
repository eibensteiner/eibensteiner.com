<template>
    <button class="button" @click="copyToClipboard(clipboardText)" :class="type">{{ label }}<span
            class="absolute left-1/2 -translate-x-1/2 bg-white"
            :class="feedbackIsVisible ? 'visible' : 'invisible'">Copied</span></button>
</template>

<script setup>
const props = defineProps(['label', 'type', 'clipboardText'])
let feedbackIsVisible = useState(() => false);

const copyToClipboard = (message) => {
    navigator.clipboard.writeText(message);

    feedbackIsVisible.value = true;

    setTimeout(() => {
        feedbackIsVisible.value = false;
    }, 1000);

}
</script>