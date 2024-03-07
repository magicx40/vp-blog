---
layout: home
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts;
console.log(posts, theme.value);
</script>
<Page :posts="posts" />
