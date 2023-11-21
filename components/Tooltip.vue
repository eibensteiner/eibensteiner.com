<template>
    <div class="tooltip-wrapper relative">
        <slot></slot>
        <span role="tooltip" class="tooltip" :class="'direction-' + direction">{{ text }}</span>
    </div>
</template>

<style>
.tooltip {
    @apply bg-neutral-900 text-white absolute whitespace-nowrap h-7 flex items-center px-2.5 text-sm rounded-md shadow-sm select-none opacity-0 invisible scale-95 transition-all z-10;
}

.direction-top {
    @apply left-1/2 -translate-x-1/2 -translate-y-3/4 -top-1;
}

.direction-bottom {
    @apply left-1/2 -translate-x-1/2 translate-y-3/4 -bottom-1;
}

@media (hover: hover) {
    .tooltip-wrapper:hover .direction-top {
        @apply opacity-100 visible -translate-y-full scale-100;
    }

    .tooltip-wrapper:hover .direction-bottom {
        @apply opacity-100 visible translate-y-full scale-100;
    }
}
</style>

<script setup>
const props = defineProps(['text', 'direction'])
</script>