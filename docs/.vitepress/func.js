import { globby } from 'globby';
import matter from 'gray-matter';
import fs from 'fs-extra';

async function getPosts() {
    let paths = await globby([`docs/posts/**.md`]);

    let posts = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, 'utf-8');
            const { data } = matter(content);
            data.date = _convertDate(data.date);
            return {
                frontMatter: data,
                regularPath: `${item.replace(/^docs\/(.+)\.md$/, '/$1.html')}`
            };
        })
    );
    posts.sort(_compareDate);
    return posts;
};

function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON();
    return json_date.split('T')[0];
};

function _compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
};

export { getPosts };