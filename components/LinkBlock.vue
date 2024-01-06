<template>
    <div @click="goToStory" @keydown.enter="goToStory" role="link" tabindex="0"
        class="group h-22 flex outline outline-1 outline-neutral-700/10 rounded-xl bg-white hover:bg-neutral-50 transition-colors drop-shadow-sm overflow-hidden cursor-pointer">
        <div class="h-full flex flex-col justify-center flex-1 py-5 px-6">
            <span class="mb-0.5 text-neutral-900">{{ content.title }}</span>
            <span class="text-neutral-700">{{ readingTime }}</span>
        </div>
        <div class="h-full w-24 bg-neutral-100 flex items-center justify-center relative select-none">
            <div class="c-content c-preview">
                <ContentRenderer :value="content">
                    <ContentRendererMarkdown :value="content" />
                </ContentRenderer>
            </div>
        </div>
    </div>
</template>

<style>
.c-content.c-preview {
    @apply h-16 w-12 flex-initial bg-white rounded outline outline-1 outline-neutral-700/10 drop-shadow-sm p-2 pb-0 text-[0.125rem];
}

.c-content.c-preview > div {
    @apply overflow-hidden h-full;
}

.c-content.c-preview p a {
    @apply no-underline;
}

.c-content.c-preview blockquote {
    @apply border-l;
}

.c-content.c-preview img {
    @apply outline-none rounded-sm;
}

.c-content.c-preview * {
    @apply pointer-events-none;
}
</style>

<script setup>
import { extractTextFromContent } from '~/utils/extractDataFromContent';

const props = defineProps(['content']);
const router = useRouter();

const goToStory = () => {
    const url = `/${props.content.author}/${props.content.slug}`;
    router.push(url);
};

const readingTime = computed(() => {
    const wordsPerMinute = 200; // Average reading speed
    const textContent = extractTextFromContent(props.content.body);
    const words = textContent.split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
});
</script>