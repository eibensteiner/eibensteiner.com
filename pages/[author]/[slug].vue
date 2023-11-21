<template>
  <div class="min-h-screen sm:border-l sm:border-r border-gray-100 mx-auto sm:max-w-xl w-full relative">
    <Navigation :user="user" :article="article"/>
    <ButtonScrollToTop /> 
    <ContentRenderer :value="article">
      <ContentRendererMarkdown :value="article" />
    </ContentRenderer>
  </div>
</template>

<script setup>
import users from '~/constants/users';

const route = useRoute();
const article = await queryContent('articles').where({ slug: route.params.slug }).findOne();
const user = users.find(user => user.handle === route.params.author);
</script>