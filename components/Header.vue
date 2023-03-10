<template>
    <header class="flex items-center flex-1 p-5">
        <div class="relative w-12 h-12 mr-5">
            <img class="w-full h-full rounded-full" src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_92,w_92/dpr_2.0/v1/1/profilePhotos/WR7DXNpKabdtLzVTjuHfy4FOCg62/c6f3bd60-7cbe-40bf-b0c6-6bb8bdd3e05f.jpg?_a=ATO2BAA0"/>
            <div class="absolute left-0 top-0 right-0 bottom-0 rounded-full border border-black border-opacity-5"></div>
        </div>
        <div class="flex flex-col">
            <span class="font-medium text-sm leading-6">
                Dominik Eibensteiner
            </span>
            <span class="font-regular text-sm leading-6 text-gray-600">
                Product Designer
            </span>
        </div>
    </header>
</template>

<script setup>
const props = defineProps(['message'])
</script>