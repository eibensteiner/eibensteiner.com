<template>
    <div class="w-full h-64 flex items-center justify-center c-border-b-transparent bg-gradient-to-b from-white to-gray-50">
        <div class="flex flex-col bg-white border rounded-xl w-28 h-36 p-3">
            <div class="w-full h-16 rounded-md c-border-transparent">
                <img class="w-full h-full object-cover"
                     :src="post.cover[post.cover.type].url" />
            </div>

            <div class="ml-2 -mt-2 mr-2">
                <div class="w-3 h-3 border border-white box-content rounded-full c-border-transparent">
                    <img class="w-full h-full object-cover"
                         :src="post.properties.Author.people[0].avatar_url" />
                </div>

                <div class="mt-3">
                    <div class="w-2/3 bg-gray-200 h-1 rounded"></div>
                    <div class="w-full bg-gray-200 h-1 rounded mt-1"></div>
                    <div class="w-1/3 bg-gray-200 h-1 rounded mt-1"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
</script>
