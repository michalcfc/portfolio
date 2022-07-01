import React from "react"

import { ContactSectionD } from "./ContactSection.d"

// components
import { Section } from "./../Section";


const ContactSection: React.FC<ContactSectionD> = () => {

    return (
        <Section
            title={'Contact'}
            subtitle={'Lets build something awesome together.'}
        >

        </Section>
    )
}

export default ContactSection;
