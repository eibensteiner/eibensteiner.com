<template>
    <section class="mt-1 mb-6">

        <!-- TYTUŁ -->
        <div>
            <img v-if="header.cover"
                 class="w-full h-64 object-cover rounded-box mt-2 mb-4"
                 :src="header.cover[header.cover.type].url"
                 alt="zdjęcie posta" />
            <div v-else></div>
        </div>

        <div class="prose mb-6">
            <h1 v-for="title in header.properties.Title[
                header.properties.Title.type
            ]">
                {{ title.plain_text }}
            </h1>
        </div>
        <div class="flex items-center gap-2  mb-6">
            <div class="flex items-center gap-2"
                 v-for="author in header.properties.Author.people">
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="header.properties.Date[header.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['header'])
const publishedAtReadable = computed(() => {
    if (props.header.properties.Date[props.header.properties.Date.type]) {
        let date = new Date(
            props.header.properties.Date[
                props.header.properties.Date.type
            ].start
        )
        return date.toLocaleString('en-US')
    } else return '?'
})
</script>
