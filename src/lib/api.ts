import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/content/_posts')
const pagesDirectory = join(process.cwd(), 'src/content/_pages');
const projectsDirectory = join(process.cwd(), 'src/content/_projects');
const dynamicPagesDirectory = join(pagesDirectory, '/dynamic');

export function getSlugsFromDirectory(dir) {
    return fs.readdirSync(dir)
}

export function getBySlug(dir, slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(dir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {
        tags: [],
        categories: [],
        title: '',
        slug: "",
        navigation: "",
        footer: ""
    };

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getPostsContentBySlug(fields = []) {
    const slugs = getSlugsFromDirectory(postsDirectory);
    const posts = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
    return posts;
}

export function getProjectsContentBySlug( fields = []) {
    const slugs = getSlugsFromDirectory(projectsDirectory);
    const projects = slugs.map((slug) => getBySlug(projectsDirectory, slug, fields));
    return projects;
}

export function getPostByCategory(fields = ['Web Design']) {
    const result = {};
    const slugs = getSlugsFromDirectory(postsDirectory);
    const categories = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
    return categories
}

export function getAllPostsCategories(fields = ['categories']) {
    const result = {};
    const slugs = getSlugsFromDirectory(postsDirectory);
    const categories = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
    const flatArrays = categories.map(a => a.categories).flat()
    flatArrays.forEach((x, i) => [{ [i]: result[i] = (result[i] || 0) + 1 }]);
    return result;
}

export function getAllPostsTags(fields = ['tags']) {
    const result = {};
    const slugs = getSlugsFromDirectory(postsDirectory);
    const tags = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
    const flatArrays = tags.map(a => (a.tags)).flat()
    flatArrays.forEach((x, i) => [{ [i]: result[i] = (result[i] || 0) + 1 }]);
    return result;
}

export function getDynamicPostsContentBySlug(slug, fields = []) {
    return getBySlug(postsDirectory, slug, fields);
}

export function getPageContentBySlug(slug, fields = []) {
    return getBySlug(pagesDirectory, slug, fields);
}

export function getDynamicPageContentBySlug(slug, fields = []) {
    return getBySlug(postsDirectory, slug, fields);
}

export function getDynamicPageContentByCategory(slug, fields = []) {
    return getBySlug(dynamicPagesDirectory, slug, fields);
}

export function getDynamicProjectContentBySlug(slug, fields = []) {
    return getBySlug(projectsDirectory, slug, fields);
}

export function getAllDynamicPages(fields = []) {
    const slugs = getSlugsFromDirectory(dynamicPagesDirectory);
    const pages = slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));
    return pages;
}