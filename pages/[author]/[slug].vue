<template>
  <ContentRenderer :value="article">
    <ContentRendererMarkdown :value="article" />
  </ContentRenderer>
  <pre>{{ articles }}</pre>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const article = await queryContent('articles').where({ slug: slug }).findOne();
</script>