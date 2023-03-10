<template>
    <NuxtLink class="rounded-2xl border shadow-inner bg-white hover:bg-gray-50 hover:bg-opacity-50 transition"
              :class="post.cover ? '' : 'h-22'"
              :to="`/${user}/${post.id}`">
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
            <div class="relative w-full h-72">
                <img class="w-full h-full object-cover rounded-lg"
                     :src="post.cover[post.cover.type].url" />
                <div class="absolute left-0 top-0 right-0 bottom-0 rounded-lg border border-black border-opacity-5"></div>
            </div>
        </div>

        <div class="flex justify-between items-center p-5">
            <div class="flex flex-col">
                <span class="font-medium text-sm leading-6"
                      v-for="title in post.properties.Title[
                          post.properties.Title.type
                      ]">
                    {{ title.plain_text }}
                </span>
                <span class="font-regular text-sm leading-6 text-gray-600"
                      v-for="description in post.properties.Description[
                          post.properties.Description.type
                      ]">
                    {{ description.plain_text }}
                </span>
            </div>
            <div class="flex items-center justify-center w-12 h-12 border shadow-inner rounded-lg bg-gradient-to-b from-white to-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     class="w-4 h-4">
                    <path fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd" />
                </svg>

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
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['post', 'user'])
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
