import {getPageContentBySlug, getProjectsContentBySlug} from "~/lib/api";
import { HomeProps } from "~types/Home"

// components
import Hero from "~components/Hero"
import About from "~components/About";
import Skills from "~components/Skills";
import Contact from "~components/Contact";
import Projects from "~components/Projects";
import Services from "~components/Services";

const Home: React.FC<HomeProps> = ({ projects, homePage }) => {

    const { hobbies } = homePage

  return (
    <>
       <Hero />
        <About hobbies={hobbies} />
        <Services />
        <Skills />
        <Projects projects={projects} />
        <Contact />
    </>
  )
}

export default Home;

export async function getStaticProps() {

    const projects = getProjectsContentBySlug([
        'title',
        'img',
        'slug',
        'content',
    ]);
    const homePage = getPageContentBySlug('home', [
        'hobbies',
    ])


    return {
        props: {
            projects,
            homePage
        }
    };
}
