<template>
    <div class="w-full flex items-start py-6 px-7 bg-white">
        <div class="h-12 my-px flex items-center justify-center mr-4">
            <Avatar :width="150" :height="150" :user="content.author" :isPinned="isPinned" />
        </div>
        <div class="flex flex-col flex-1">
            <span class="leading-6 mb-0.5">
                <nuxt-link v-if="!params.author" :to="`/${content.author}`" class="text-neutral-900">{{ user.firstname
                }}</nuxt-link>
                <span v-else class="text-neutral-700">{{ user.firstname }}</span>
                <span class="text-neutral-700"> shared a {{ content.type }}</span>

                <Tooltip :text="absoluteDate" :direction="'bottom'" class="inline">
                    <span class="ml-1.5 text-neutral-500 cursor-default">{{ relativeDate }}</span>
                </Tooltip>
            </span>

            <span v-if="content.thought" class="font-regular leading-6 text-neutral-700">{{ content.thought }}</span>
            <link-block v-if="!content.thought" :content="content"></link-block>
        </div>
    </div>
</template>

<script setup>
import users from '~/constants/users';
import { getAbsoluteDate, getRelativeDate } from '~/utils/getReadableDate';

const props = defineProps(['content', 'isPinned']);
const user = users.find(user => user.handle === props.content.author);
const relativeDate = getRelativeDate(props.content.createdAt);
const absoluteDate = getAbsoluteDate(props.content.createdAt);
const route = useRoute();
const params = route.params;
</script>