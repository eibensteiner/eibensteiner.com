<template>
    <div class="w-full flex items-start p-6 bg-white">
        <Avatar class="mr-4" :src="`/img/users/${user.handle}.jpeg`" :width="150" :height="150" 
                :alt="user.name" :category="content.properties.Category.select"/>
        <div class="flex flex-col flex-1">
            <span class="leading-6 mb-0.5">
                <template v-for="title in content.properties.Title.title">
                    <span>{{ title.plain_text }}</span>
                </template>
                <Tooltip :text="readableDate" :direction="'top'" class="inline">
                    <span class="ml-1.5 leading-6 text-gray-400">{{ publishedAtReadable }}</span>
                </Tooltip>
            </span>

            <span class="font-regular leading-6 text-gray-600">
                <template v-for="subtitle in content.properties.Description.rich_text">
                    <span>{{ subtitle.plain_text }}</span>
                </template>
            </span>

            <Image v-if="content.properties.Images.files.length != 0" class="mt-4 rounded-lg"
                :src="content.properties.Images.files[0].file.url" :width="1000" :height="800" :alt="content.properties.Title.title[0].plain_text"></Image>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['content', 'user'])

const publishedAtReadable = computed(() => {
    let current = Math.floor(new Date().getTime() / 1000);
    let posted = Math.floor(new Date(props.content.properties.Date.date.start).getTime() / 1000);
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
    if (props.content.properties.Date[props.content.properties.Date.type]) {
        let date = new Date(
            props.content.properties.Date[props.content.properties.Date.type].start
        )
        return date.toLocaleString('en-US', { dateStyle: 'medium' })
    } else return '?'
})
</script>