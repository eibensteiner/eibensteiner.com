<template>
    <div class="w-full flex items-start p-6 pb-8 bg-white">
        <Avatar class="mr-4" :width="150" :height="150" :user="content.author" :isPinned="content.pinned && showPinned" />
        <div class="flex flex-col flex-1">
            <span class="leading-6 mb-0.5">
                <nuxt-link :to="`/${content.author}`" class="text-black">{{ user.firstname }}</nuxt-link>
                <span> shared a {{ entryType }}</span>

                <Tooltip :text="readableDate" :direction="'bottom'" class="inline">
                    <span class="ml-1.5 leading-6 text-gray-400">{{ publishedAtReadable }}</span>
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

const props = defineProps(['content', 'showPinned']);
const user = users.find(user => user.handle === props.content.author);

const readingTime = computed(() => {
    const wordsPerMinute = 200; // Average reading speed
    const textContent = extractTextFromArticle(props.content.body);
    const words = textContent.split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time <= 1 ? `${time} min read` : `${time} mins read`;
});

const entryType = computed(() => {
    if (props.content.thought) {
        return 'thought'
    } else return 'story'
})

const publishedAtReadable = computed(() => {
    let current = Math.floor(new Date().getTime() / 1000);
    let posted = Math.floor(new Date(props.content.createdAt).getTime() / 1000);
    let diff = current - posted;

    if (diff < 86400) {
        // Less than a day has passed:
        return 'Today';
    } else if (diff < 2628000) {
        // Less than a month has passed:
        return `${Math.floor(diff / 86400)}d`;
    } else if (diff < 31536000) {
        // Less than a year has passed:
        return `${Math.floor(diff / 2628000)}m`;
    } else {
        // More than a year has passed:
        return `${Math.floor(diff / 31536000)}y`;
    }
})

const readableDate = computed(() => {
    let date = new Date(props.content.createdAt)
    return date.toLocaleString('en-US', { dateStyle: 'medium' })
})

</script>