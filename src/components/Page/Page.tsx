import React from 'react';
import { NextSeo } from 'next-seo';
import { PageD } from './Page.d';

// utils
import { SPACING } from '~utils/styles/spacing';

// components
import { Container } from '~components/common/Container';
import { Jumbotron } from '~components/common/Jumbotron';

const Page: React.FC<PageD> = ({
  op,
  seoTitle,
  seoDesc,
  canonical,
  pageTitle,
  pageSubtitle,
  children,
}) => (
  <>
    <NextSeo
      title={seoTitle}
      description={seoDesc}
      canonical={canonical}
      openGraph={{
        url: op.url,
        title: op.title,
        description: op.desc,
        images: op.img,
      }}
      twitter={{
        handle: '@coczytasz',
        site: '@coczytasz',
        cardType: 'summary_large_image',
      }}
    />
    {pageTitle
            && (
            <Jumbotron
              title={pageTitle}
              subtitle={pageSubtitle}
            />
            )}
    <Container my={pageTitle ? SPACING.xl : SPACING['3xl']}>
      {children}
    </Container>
  </>
);

export default Page;
