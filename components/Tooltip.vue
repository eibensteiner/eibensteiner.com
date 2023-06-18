<template>
    <div class="tooltip-wrapper relative">
        <slot></slot>
        <span role="tooltip"
            class="tooltip bg-gray-900 text-white left-1/2 -translate-x-1/2 -top-1 absolute whitespace-nowrap h-7 flex items-center px-2.5 text-sm rounded-md shadow-sm select-none">{{
                text }}</span>
    </div>
</template>

<style>
.tooltip {
    @apply opacity-0 invisible -translate-y-3/4 scale-95 transition-all;
}

@media (hover: hover) {
    .tooltip-wrapper:hover .tooltip {
        @apply opacity-100 visible -translate-y-full scale-100;
    }
}
</style>

<script setup>
const props = defineProps(['text'])
</script>