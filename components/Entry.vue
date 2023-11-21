<template>
    <div class="w-full flex items-start p-6 pb-8 bg-white">
        <Avatar class="mr-4" :width="150" :height="150" :user="content.author" :isPinned="isPinned" />
        <div class="flex flex-col flex-1">
            <span class="leading-6 mb-0.5">
                <nuxt-link v-if="!params.author" :to="`/${content.author}`" class="text-black">{{ user.firstname }}</nuxt-link>
                <span v-else class="text-black">{{ user.firstname }}</span>
                <span> shared a {{ content.type }}</span>

                <Tooltip :text="absoluteDate" :direction="'bottom'" class="inline">
                    <span class="ml-1.5 leading-6 text-gray-400">{{ relativeDate }}</span>
                </Tooltip>
            </span>

            <span v-if="content.thought" class="font-regular leading-6 text-gray-600">{{ content.thought }}</span>
            <link-block v-if="!content.thought" :link="`/${content.author}/${content.slug}`" :title="content.title"
                :img="content.slug" :readingTime="readingTime"></link-block>
        </div>
    </div>
</template>

<script setup>
import users from '~/constants/users';
import extractTextFromArticle from '~/utils/extractTextFromArticle';
import { getAbsoluteDate, getRelativeDate } from '~/utils/getReadableDate';

const props = defineProps(['content', 'isPinned']);
const user = users.find(user => user.handle === props.content.author);
const relativeDate = getRelativeDate(props.content.createdAt);
const absoluteDate = getAbsoluteDate(props.content.createdAt);
const route = useRoute();
const params = route.params;

const readingTime = computed(() => {
    const wordsPerMinute = 200; // Average reading speed
    const textContent = extractTextFromArticle(props.content.body);
    const words = textContent.split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time <= 1 ? `${time} min read` : `${time} mins read`;
});
</script>