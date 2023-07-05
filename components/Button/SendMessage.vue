<template>
    <button class="button" :class="type">{{ label }}</button>
</template>

<script setup>
const props = defineProps(['label', 'type'])
</script>