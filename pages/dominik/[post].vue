<template>
    <div>
        <!--<div class=" breadcrumbs">
            <ul>
                <li>
                    <NuxtLink to="/">Main page</NuxtLink>
                </li>
                <li v-if="!pendingHeader">
                    {{ header.properties.Title.title[0].text.content }}
                </li>
            </ul>
        </div>-->
        <template v-if="
            !pendingHeader &&
            !pendingContent &&
            !errorHeader &&
            !errorContent
        ">
            <BlogPost :header="header" :content="content" />
            <div class="h-22 rounded-2xl border shadow-inner bg-white hover:bg-gray-50 hover:bg-opacity-50 transition"
                 @click="goBack">
                <div class="flex justify-between items-center p-5">
                    <div class="flex flex-col">
                        <span class="font-medium  leading-6">
                            Dominik
                        </span>
                        <span class="font-regular  leading-6 text-gray-600">
                            Go Back
                        </span>
                    </div>
                    <div
                         class="flex items-center justify-center w-12 h-12 border shadow-inner rounded-lg bg-gradient-to-b from-white to-gray-50">
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
            </div>
        </template>






        <!--<div v-else-if="
            (errorHeader || errorContent) &&
            !pendingHeader &&
            !pendingContent
        ">
            <div class="hero bg-base-100">
                <div class="hero-content text-center">
                    <div class="">
                        <p class="py-6">
                            Oops! This article doesn't exist or has been
                            deleted.
                        </p>
                        <button class="btn btn-neutral btn-sm"
                                @click="goBack">
                            &lArr; Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>-->
        <BlogPostPlaceholder v-else />
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const {
    data: header,
    pending: pendingHeader,
    refresh: refreshHeader,
    error: errorHeader,
} = await useLazyAsyncData('header', () =>
    $fetch(`/api/notion/retrieve-page/${route.params.post}`)
)

const {
    data: content,
    pending: pendingContent,
    refresh: refreshContent,
    error: errorContent,
} = await useLazyAsyncData('content', () =>
    $fetch(`/api/notion/retrieve-block-children/${route.params.post}`)
)

const goBack = () => {
    router.go(-1)
}

refreshHeader()
refreshContent()
</script>
