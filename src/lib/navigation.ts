import { join } from 'path';
import { getAllDynamicPages, getPageContentBySlug } from './api';

// eslint-disable-next-line import/prefer-default-export
export function getNavigationLinks() {
  const fields = ['title', 'slug', 'navigation', 'footer'];
  const dynamicPages = getAllDynamicPages(fields);

  const home = getPageContentBySlug('home', fields);

  const links = [{ ...home, slug: '/' }, ...dynamicPages]
    .map(({
      title, slug, navigation, footer,
    }) => ({
      title,
      // @ts-ignore
      href: join('/', slug),
      navigation: navigation || false,
      footer: footer || false,
    }));

  return links;
}
