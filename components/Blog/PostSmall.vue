<template>
    <NuxtLink class="w-full p-6 overflow-hidden bg-white border-b"
        :to="post.properties.Type.select.name == 'Writing' ? `/${user}/${post.id}` : post.properties.Link.url">
        <div class="w-full h-full">

            <!--<Preview v-if="post.cover" :post="post"></Preview>-->

            <div class="flex items-start">
                <div
                    class="flex items-center justify-center w-8 h-8 border shadow-inner rounded-lg bg-gradient-to-b from-white to-gray-50 mr-4">
                    <span v-if="post.icon" class="text-md">{{ post.icon.emoji }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-medium text-sm leading-6">
                        {{ post.properties.Title.title[0].plain_text }}
                    </span>
                    <span class="font-medium text-sm leading-6">
                        {{ publishedAtReadable }}
                    </span>
                    <span class="font-regular text-sm leading-6 text-gray-600">
                        Read More
                    </span>
                </div>
            </div>
        </div>

        <pre>{{ post.properties }}</pre>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['post', 'user'])

const publishedAtReadable = computed(() => {
    let current = Math.floor(new Date().getTime() / 1000);
    let posted = Math.floor(new Date(props.post.properties.Date.date.start).getTime() / 1000);
    let diff = current - posted;
    let time;

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
</script>
