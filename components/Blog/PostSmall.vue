<template>
    <div class="rounded-2xl border shadow-inner"
         :class="post.cover ? '' : 'h-22'">
        <!--<div class="col-span-5 flex items-center gap-2 text-sm">
            <div class="flex items-center gap-2"
                 v-for="author in post.properties.Author.people">
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="post.properties.Date[post.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>-->
        <div v-if="post.cover"
             class="px-3 pt-3">
            <img class="w-full h-72 object-cover rounded-lg rounded-box"
                 :src="post.cover[post.cover.type].url" />
        </div>
        <div class="flex justify-between items-center p-5">
            <div class="flex flex-col">
                <NuxtLink class="font-medium text-sm leading-6 link link-hover"
                          :to="`/articles/${post.id}`"
                          v-for="title in post.properties.Title[
                              post.properties.Title.type
                          ]">
                    {{ title.plain_text }}
                </NuxtLink>
                <span class="font-regular text-sm leading-6"
                      v-for="description in post.properties.Description[
                          post.properties.Description.type
                      ]">
                    {{ description.plain_text }}
                </span>
            </div>
            <div class="w-12 h-12 border shadow-inner rounded-lg">

            </div>
        </div>

        <!--<div class="col-span-5 flex gap-2 items-center flex-wrap">
            <div class="badge badge-neutral"
                 v-for="category in post.properties.Category[
                     post.properties.Category.type
                 ]">
                {{ category.name }}
            </div>
        </div>-->
    </div>
</template>

<script setup>
const props = defineProps(['post'])
const publishedAtReadable = computed(() => {
    // Obliczanie daty do przyjaznego formatu
    if (props.post.properties.Date[props.post.properties.Date.type]) {
        let date = new Date(
            props.post.properties.Date[props.post.properties.Date.type].start
        )
        return date.toLocaleString('en-US')
    } else return '?'
})
</script>
