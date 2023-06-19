<template>
    <NuxtLink class="w-full p-6 bg-white border-b border-gray-100"
        :to="post.properties.Type.select.name == 'Writing' ? `/${user}/${post.id}` : post.properties.Link.url">
        <div class="flex items-start">
            <div
                class="flex items-center justify-center w-9 h-9 outline outline-1 outline-gray-200 shadow-sm rounded-lg bg-gray-50 mr-4">
                <span v-if="post.icon" class="select-none">{{ post.icon.emoji }}</span>
            </div>
            <div class="flex flex-col flex-1">
                <span class="leading-6 mb-0.5">
                    <template v-for="title in post.properties.Title.title">
                        <span>{{ title.plain_text }}</span>
                    </template>
                    <Tooltip :text="readableDate">
                        <span class="ml-1.5 leading-6 text-gray-400">{{ publishedAtReadable }}</span>
                    </Tooltip>
                </span>

                <span class="font-regular leading-6 text-gray-600">
                    <template v-for="subtitle in post.properties.Description.rich_text">
                        <span>{{ subtitle.plain_text }}</span>
                    </template>
                </span>

                <Image v-if="post.properties.Images.files.length != 0" class="mt-4 rounded-lg"
                    :src="post.properties.Images.files[0].file.url"></Image>

            </div>
        </div>
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

const readableDate = computed(() => {
    if (props.post.properties.Date[props.post.properties.Date.type]) {
        let date = new Date(
            props.post.properties.Date[props.post.properties.Date.type].start
        )
        return date.toLocaleString('en-US', { dateStyle: 'medium' })
    } else return '?'
})
</script>