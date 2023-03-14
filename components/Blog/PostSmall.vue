<template>
    <NuxtLink class="relative rounded-2xl overflow-hidden bg-white hover:bg-gray-50 hover:bg-opacity-50 transition shadow-inner"
              :to="post.properties.Type.select.name == 'Writing' ? `/${user}/${post.id}` : post.properties.Link.url">
        <div class="w-full h-full">
            
            <Preview v-if="post.cover" :post="post"></Preview>

            <div class="flex justify-between items-center p-5 h-22">
                <div class="flex flex-col">
                    <span class="font-medium text-sm leading-6">
                        {{ post.properties.Title.title[0].plain_text }}
                    </span>
                    <span v-if="post.properties.Type.select.name != 'Writing'"
                          class="font-regular text-sm leading-6 text-gray-600">
                        {{ post.properties.Link.url }}
                    </span>
                    <span v-else
                          class="font-regular text-sm leading-6 text-gray-600">
                        Read More
                    </span>
                </div>
                <div v-if="post.properties.Type.select.name != 'Writing'"
                     class="flex items-center justify-center w-12 h-12 border shadow-inner rounded-lg bg-gradient-to-b from-white to-gray-50">
                    <span v-if="post.icon"
                          class="text-lg">{{ post.icon.emoji }}</span>
                    <IconArrowUpRight v-else />
                </div>
            </div>
        </div>
        <div class="absolute rounded-2xl left-0 top-0 right-0 bottom-0 border border-black border-opacity-5"></div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['post', 'user'])
</script>
