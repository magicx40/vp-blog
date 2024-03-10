---
layout: home
---
<script setup>
import Page from ".vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts;
</script>
<Page :posts="posts" />
