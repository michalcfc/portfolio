import Jumbotron from "@components/Jumbotron";
import ProjectsList from "~components/ProjectsList";
import { getProjectsContentBySlug } from "~lib/api";

const Projects = ({ projects }) => {

    return <>
        <Jumbotron
            title={"Projects"}
            description={"Create custom landing pages with Omega that converts more visitors than any website."}
        />
        <ProjectsList projects={projects} />
    </>
}

export default Projects

export async function getStaticProps() {
    const projects = getProjectsContentBySlug([
        'title',
        'img',
        'slug',
        'content',
    ]);

    return {
        props: {
            projects
        }
    };
}
