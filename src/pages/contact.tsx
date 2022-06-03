import Jumbotron from "@components/Jumbotron";
import ContactForm from "~components/ContactForm";

const Contact = () => {

    return <>
        <Jumbotron
            title={"Contact"}
            description={"Create custom landing pages with Omega that converts more visitors than any website."}
        />
        <ContactForm />
    </>
}

export default Contact
