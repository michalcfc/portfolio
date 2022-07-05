// utils
import { SIZES } from '~utils/styles/sizes';

// components
import { Box } from '~components/common/Box';
import { Page, PageContent } from '~components/Page';
import { ContactForm } from '~components/ContactForm';

const Contact = () => (
  <Page
    pageTitle="Contact"
    seoTitle="Kontakt"
    seoDesc="Strona kontaktowa"
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
    <PageContent>
      <Box maxWidth={SIZES.md}>
        <ContactForm />
      </Box>
    </PageContent>
  </Page>
);

export default Contact;
