import React from "react"

import { AboutSectionD } from "./ServicesSection.d"

// utils
import { SPACING } from "~utils/styles/spacing";

// components
import { Section } from "./../Section";
import { Box } from "~components/common/Box";
import { Text } from "~components/common/Text";
import { Grid } from "~components/common/Grid";
import { Heading } from "~components/common/Heading";


const FaqSection: React.FC<AboutSectionD> = () => {



    return (
        <Section
            title={'About us'}
            subtitle={'Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.'}
        >
                <Grid
                    gridGap={SPACING.xl}
                    gridTemplateColumns={[
                        "1fr",
                        "repeat(2, 1fr)",
                    ]}
                >
                <Heading type={'h3'} title={'The drag-and-drop editor you didn’t dare dream of'} />
                <Text text={'The Slider Revolution editor was built to save hours or even days of work on every project.'} />
                <Text text={'The new interface comes with intuitive options categories. You’ll know exactly where you can find what you need at all times, so you can implement your creative vision with just a few clicks..'} />
                <Text text={'The speed of production will make your clients marvel at the how fast you can deliver fully-polished, stunning visual work.'} />
                </Grid>

        </Section>
    )
}

export default FaqSection;
