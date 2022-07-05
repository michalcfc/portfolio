import { GetStaticProps } from 'next';
import { ProjectsPageD } from '~types/projectsPage';

import { getAllProjectsCategory } from '~lib/api';

// utils
import { SIZES } from '~utils/styles/sizes';
import { SPACING } from '~utils/styles/spacing';
import { FONT_SIZES } from '~utils/styles/fontSizes';

// components
import { Page } from '~components/Page';
import { Box } from '~components/common/Box';
import { Text } from '~components/common/Text';
import { Projects } from '~components/Projects';
import { Heading } from '~components/common/Heading';

const ProjectsPage = ({ projects }: ProjectsPageD) => (
  <Page
    seoTitle="Projekty"
    seoDesc="Projekty"
    canonical="https://www.icoding.pl/"
    op={{
      url: '/og-image.png',
      title: 'My portfolio',
      desc: 'My portfolio',
      img: [
        {
          url: '/og-image.png',
          width: 800,
          height: 420,
          alt: 'my portfolio',
        },
      ],
    }}
  >
    <Box
      mb={SPACING['2xl']}
      display="flex"
      justifyContent="center"
      textAlign="center"
    >
      <Box maxWidth={SIZES.lg}>
        <Heading type="h2" title="My Projects" />
        <Text
          isMuted
          as="p"
          mt={SPACING.md}
          fontSize={FONT_SIZES.lg}
          text={'Morbi risus elit, fringilla in cursus a, molestie non dui. '
                    + 'Nunc accumsan gravida risus, ac semper libero mollis ut.'}
        />
      </Box>
    </Box>
    <Projects
      projects={projects}
    />
  </Page>
);

export default ProjectsPage;

export const getStaticProps: GetStaticProps = () => {
  const projects = getAllProjectsCategory([
    'name',
    'img',
    'categories',
  ]);

  return {
    props: {
      projects,
    },
  };
};
