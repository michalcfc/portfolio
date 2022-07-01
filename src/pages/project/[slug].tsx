import { GetStaticProps } from "next";

import Head from 'next/head'
import { NextSeo } from 'next-seo';
import markdownToHtml from '~lib/markdownToHtml';

import { Project } from "~types/Projects";

import {
  getProjectsContentBySlug,
  getDynamicProjectContentBySlug
} from '../../lib/api'

// utils
import { COLORS } from "~utils/styles/colors";
import { SPACING } from "~utils/styles/spacing";
import { BOX_SHADOWS } from "~utils/styles/boxShadows";
import { BORDER_RADIUS } from "~utils/styles/borderRadius";

// components
import { Container } from "~components/common/Container";
import {
  ProjectDetails ,
  ProjectDescription
} from "~components/Projects";
import { Grid } from "~components/common/Grid";
import { Box } from "~components/common/Box";

const ProjectPage = ({ project, content }) => {

  const {
    name,
    details,
  } = project


  return <>
    <Container mt={4} mb={4}>
      <>
        <Head>
          <title>
            {name}
          </title>
          {/*<meta property="og:image" content={post.ogImage.url} />*/}
        </Head>
        <NextSeo
            title={name}
            openGraph={{
              url: name,
              title: `${name}`,
            }}
        />
      </>
      <Grid
          gridGap={3}
          gridTemplateColumns={"repeat(12, 1fr)"}
      >
        <Box
            p={SPACING.xl}
            background={COLORS.white}
            boxShadow={BOX_SHADOWS.base}
            borderRadius={BORDER_RADIUS.base}
            gridColumn={['span 12', 'span 12', 'span 8']}
        >
        <ProjectDescription
          desc={content}
        />
        </Box>
        <Box
            p={SPACING.xl}
            background={COLORS.white}
            boxShadow={BOX_SHADOWS.base}
            borderRadius={BORDER_RADIUS.base}
            gridColumn={['span 12', 'span 12', 'span 4']}
        >
          <ProjectDetails
            name={name}
            details={details}
          />
        </Box>
      </Grid>
    </Container>
  </>
}

export default ProjectPage


export async function getStaticProps({ params }: GetStaticProps<{
  project: Project
}>) {
  const { slug } = params;
  const project = getDynamicProjectContentBySlug(slug, [
    'name',
    'img',
    'tags',
    'details',
    'stack',
    'content',
  ]);

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