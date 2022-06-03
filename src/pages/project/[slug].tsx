import { useRouter } from 'next/router'

import Head from 'next/head'
import { NextSeo } from 'next-seo';
import markdownToHtml from '~lib/markdownToHtml';

import {
  getProjectsContentBySlug,
  getDynamicProjectContentBySlug
} from '../../lib/api'

// components
import Project from "~components/Project";
import Container from "~components/Container";

const ProjectPage = ({ project, content }) => {

  const {
    slug,
    title,
  } = project

  const router = useRouter()
  // if (!router.isFallback && !slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return <>
    <Container mt={4} mb={4}>
      <>
        <Head>
          <title>
            {title}
          </title>
          {/*<meta property="og:image" content={post.ogImage.url} />*/}
        </Head>
        <NextSeo
            title={title}
            openGraph={{
              url: slug,
              title: `${title}`,
            }}
        />
      </>
      <Project project={project} content={content} />
    </Container>
  </>
}

export default ProjectPage


export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = getDynamicProjectContentBySlug(slug, [
    'title',
    'img',
    'slug',
    'tags',
    'details',
    'stack',
    'content',
  ]);
  // @ts-ignore
  const content = await markdownToHtml(project.content || '');

  return {
    props: {
      project,
      content
    }
  };
}

export async function getStaticPaths() {
  const posts = getProjectsContentBySlug(['slug']);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}