<template>
    <div class="w-full flex items-start p-6 pb-8 bg-white">
        <Avatar class="mr-4" :src="`/img/users/${content.author}.jpg`" :width="150" :height="150" :alt="content.author" />
        <div class="flex flex-col flex-1">
            <div class="my-1.5">
                <span class="leading-6 mb-0.5">
                    <span><nuxt-link :to="`/${content.author}`" class="text-black">{{ content.author }}</nuxt-link> shared a
                        new {{ entryType }}</span>
                    <!--<Tooltip :text="readableDate" :direction="'top'" class="inline">
                        <span class="ml-1.5 leading-6 text-gray-400">{{ publishedAtReadable }}</span>
                    </Tooltip>-->
                </span>
            </div>

            <span v-if="content.note" class="font-regular leading-6 text-gray-600">{{ content.note }}</span>
            <nuxt-link v-if="!content.note" :to="`/${content.author}/${content.slug}`">{{ content.title }}</nuxt-link>
            <!--<Image v-if="content.properties.Images.files.length != 0" class="mt-4 rounded-lg"
                :src="content.properties.Images.files[0].file.url" :width="1000" :height="800"
                :alt="content.properties.Title.title[0].plain_text"></Image>-->
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['content'])

const entryType = computed(() => {
    if(props.content.note) {
        return 'thought'
    } else return 'story'
})

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