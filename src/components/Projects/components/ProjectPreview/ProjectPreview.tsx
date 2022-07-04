import React from "react"

import { ProjectPreviewD } from "./ProjectPreview.d"
import {
    Action,
    ProjectWrapper
} from "./ProjectPreview.styles";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

// helpers
import { getSlugFromTitle } from "~utils/getSlugFromTitle";

// utils
import { SPACING } from "~utils/styles/spacing";
import { BORDER_RADIUS } from "~utils/styles/borderRadius";

// components
import { Img } from "~components/common/Img";
import { Box } from "~components/common/Box";
import { Link } from "~components/common/Link";
import { Icon } from "~components/common/Icon";
import { Heading } from "~components/common/Heading";

const ProjectPreview: React.FC<ProjectPreviewD> = ({
    img,
    name,
}) =>  (
        <ProjectWrapper>
            <Box
                height={300}
                width={'100%'}
                position={'relative'}
            >
                <Img
                    src={img}
                    alt={name}
                    layout={'responsive'}
                    borderRadius={BORDER_RADIUS.base}
                />
                <Action>
                    <Link href={'/contact'}>
                        <Icon size={'4x'} name={faArrowAltCircleUp} />
                    </Link>
                </Action>
            </Box>
            <Heading
                type={'h4'}
                title={name}
                mt={SPACING.md}
            />
            <Link
                isAbsolute
                zIndex={98}
                href={`/project/${getSlugFromTitle(name)}`}
            />
        </ProjectWrapper>
    )

export default ProjectPreview;