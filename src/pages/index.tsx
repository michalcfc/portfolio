import React from 'react';
import { HomePageD } from '~types/homePage';

import {
  getPageContentBySlug,
  getProjectsContentBySlug,
} from '~lib/api';

// components
import { Hero } from '~components/Hero';
import {
  AboutSection,
  ToolsSection,
  ProcessSection,
  ContactSection,
  ServicesSection,
  FeaturesSection,
  ProjectsSection,
} from '~components/Sections';

const Home: React.FC<HomePageD> = () => (
  <>
    <Hero
      img="/img/hero_man.png"
      strap="Hi, nice to see you"
      title="Discover 4500+ Courses from top Instructors"
      subtitle="Tomfoolery are you taking the piss cor blimey guvnor do one bleeding young delinquent."
      primary_cta={{ name: 'Show more', uri: '/books' }}
      secondary_cta={{ name: 'Contact with us', uri: '/contact' }}
    />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <ProcessSection />
    <ProjectsSection />
    <ToolsSection />
    <ContactSection />
  </>
);

export default Home;

export async function getStaticProps() {
  const projects = getProjectsContentBySlug([
    'title',
    'img',
    'content',
  ]);
  const homePage = getPageContentBySlug('home', [
    'hobbies',
  ]);

  return {
    props: {
      projects,
      homePage,
    },
  };
}
