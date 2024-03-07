<template>
    <div v-for="(article, index) in posts" :key="index" class="post-list">
        <div class="post-header">
            <div class="post-title">
                <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
            </div>
        </div>
        <p class="describe" v-html="article.frontMatter.description"></p>
        <div class='post-info'>
            {{ article.frontMatter.date }} <span v-for="item in article.frontMatter.tags"><a :href="withBase(`/posts/tags.html?tag=${item}`)"> {{ item }}</a></span>
        </div>
    </div>
</template>
<script setup>
import { withBase } from 'vitepress';
const props = defineProps({
    posts: Array
});
</script>