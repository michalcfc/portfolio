import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/content/_posts');
const pagesDirectory = join(process.cwd(), 'src/content/_pages');
const projectsDirectory = join(process.cwd(), 'src/content/_projects');
const dynamicPagesDirectory = join(pagesDirectory, '/dynamic');

export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

export function getBySlug(dir, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

    type Items = {
      [key: string]: string
    };

    const items: Items = {};

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

export function getPostsContentBySlug(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(postsDirectory);
  const posts = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
  return posts;
}

export function getAllProjectsCategory(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(projectsDirectory);
  const categories = slugs.map((slug) => getBySlug(projectsDirectory, slug, fields));
  return categories;
}

export function getProjectsContentBySlug(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(projectsDirectory);
  const projects = slugs.map((slug) => getBySlug(projectsDirectory, slug, fields));
  return projects;
}

export function getPostByCategory(fields: string[] = ['Web Design']) {
  const slugs = getSlugsFromDirectory(postsDirectory);
  const categories = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
  return categories;
}

export function getAllPostsCategories(fields: string[] = ['categories']) {
  const result = {};
  const slugs = getSlugsFromDirectory(postsDirectory);
  const categories = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
  const flatArrays = categories.map((a) => a.categories).flat();
  flatArrays.forEach((x, i) => [{ [i]: result[i] = (result[i] || 0) + 1 }]);
  return result;
}

export function getAllPostsTags(fields: string[] = ['tags']) {
  const result = {};
  const slugs = getSlugsFromDirectory(postsDirectory);
  const tags = slugs.map((slug) => getBySlug(postsDirectory, slug, fields));
  const flatArrays = tags.map((a) => (a.tags)).flat();
  flatArrays.forEach((x, i) => [{ [i]: result[i] = (result[i] || 0) + 1 }]);

  return result;
}

export function getDynamicPostsContentBySlug(slug, fields: string[] = []) {
  return getBySlug(postsDirectory, slug, fields);
}

export function getPageContentBySlug(slug, fields: string[] = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

export function getDynamicPageContentBySlug(slug, fields: string[] = []) {
  return getBySlug(postsDirectory, slug, fields);
}

export function getDynamicPageContentByCategory(slug, fields: string[] = []) {
  return getBySlug(dynamicPagesDirectory, slug, fields);
}

export function getDynamicProjectContentBySlug(slug, fields: string[] = []) {
  return getBySlug(projectsDirectory, slug, fields);
}

export function getAllDynamicPages(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(dynamicPagesDirectory);
  const pages = slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));
  return pages;
}
