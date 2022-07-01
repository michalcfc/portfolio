import React from "react";
import { PageContentD } from "./PageContent.d"

// utils
import { COLORS } from "~utils/styles/colors";
import { SPACING } from "~utils/styles/spacing";
import { BOX_SHADOWS } from "~utils/styles/boxShadows";
import { BORDER_RADIUS } from "~utils/styles/borderRadius";

// components
import { Box } from "~components/common/Box";
import { Breadcrumbs } from "~components/common/Breadcrumbs";

const PageContent: React.FC<PageContentD> = ({
    children
   }) => (
    <>
        <Breadcrumbs />
        <Box
            p={SPACING.xl}
            background={COLORS.white}
            boxShadow={BOX_SHADOWS.base}
            borderRadius={BORDER_RADIUS.base}
        >
            {children}
        </Box>
    </>
)

export default PageContent;
