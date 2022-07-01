import { Jumbotron } from "~components/common/Jumbotron";
import { Page } from "~components/Page";

const About = () => {

    return <Page
        pageTitle={'About'}
        pageSubtitle={"Create custom landing pages with Omega that converts more visitors than any website."}
        seoTitle={'About'}
        seoDesc={"About"}
        canonical={"https://www.icoding.pl/"}
        op={{
            url: '/og-image.png',
            title: 'My portfolio',
            desc: 'My portfolio',
            img:  [
                {
                    url: "/og-image.png",
                    width: 800,
                    height: 420,
                    alt: "my portfolio",
                },
            ]
        }}
    >
        <p>
            I enjoy building beautiful, user-friendly websites and web applications.
            Look through some of my work and experiences!
            If you like what you see and have a project you need to be coded, don't hesitate to contact me.
        </p>
    </Page>
}

export default About
