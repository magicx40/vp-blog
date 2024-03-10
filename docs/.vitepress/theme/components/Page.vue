<template>
    <div class="post-list">
        <div v-for="(article, index) in posts" :key="index" class="post-list-item">
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
    </div>
</template>
<script setup>
import { withBase } from 'vitepress';
const props = defineProps({
    posts: Array
});
</script>
<style scoped>
.post-list {
    margin-top: 12px;
}
.post-list > .post-list-item {
    margin-bottom: 12px;
    padding: 12px;
    transition: all .3s;
    cursor: pointer;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .1);
}
.post-list > .post-list-item:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, .2);
}
</style>