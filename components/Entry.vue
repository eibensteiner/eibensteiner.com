<template>
    <div class="flex items-start flex-1 py-6 px-7 bg-white gap-4">
        <div class="h-12 my-px flex flex-none items-center justify-center">
            <Avatar :width="150" :height="150" :user="content.author" :isPinned="isPinned" />
        </div>
        <div class="flex flex-col flex-auto min-w-0">
            <span class="leading-6 mb-0.5">
                <nuxt-link v-if="!params.author" :to="`/${content.author}`" class="text-neutral-900">{{ user.firstname
                }}</nuxt-link>
                <span v-else class="text-neutral-700">{{ user.firstname }}</span>
                <span v-if="content.type === 'thought'" class="text-neutral-700"> shared a {{ content.type }}</span>
                <span v-else class="text-neutral-700"> published a story</span>

                <Tooltip v-if="!isPinned" :text="absoluteDate" :direction="'bottom'" class="inline">
                    <span class="ml-1.5 text-neutral-500 cursor-default">{{ getRelativeDate(props.content.createdAt) }}</span>
                    <!--<span class="ml-1.5 text-neutral-500 cursor-default">{{ relativeDate }}</span>-->
                </Tooltip>
                <span v-else class="ml-1.5 text-neutral-500">Pinned</span>
            </span>

            <template v-if="content.thought">
                <span class="font-regular leading-6 text-neutral-700" v-html="content.thought"></span>
                <nuxt-img v-if="content.image" class="mt-4 w-full outline outline-1 -outline-offset-1 outline-neutral-700/10 rounded-md bg-neutral-100" :src="content.image" fit="fill" format="webp" :alt="content.title"
                />
            </template>

            <link-block v-else :content="content" class="mt-2"></link-block>
        </div>
    </div>
</template>

<style>
span a {
    @apply text-neutral-900 underline decoration-dashed decoration-neutral-300 underline-offset-4 decoration-1 hover:text-black hover:decoration-neutral-400 transition-colors;
}
</style>

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