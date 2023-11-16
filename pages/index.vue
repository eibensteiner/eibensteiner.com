<template>
  <div class="relative">
    <div class="entry-container flex flex-col">
      <Entry v-if="articles" v-for="article in articles" :content="article" />
    </div>
  </div>
</template>

<style>
.entry-container>*:not(:last-child) {
  @apply border-b border-gray-100;
}
</style>

<script setup>
const articles = await queryContent('articles').find();
</script>