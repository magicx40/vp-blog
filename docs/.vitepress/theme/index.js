import DefaultTheme from 'vitepress/theme';
import Layout from './components/NewLayout.vue';
import './index.css';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {

    }
};