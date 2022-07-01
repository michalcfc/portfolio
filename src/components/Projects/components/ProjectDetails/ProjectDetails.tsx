import React from "react"

import { ProjectDetailsD } from "./ProjectDetails.d"

// utils
import { COLORS } from "~utils/styles/colors";
import { SPACING } from "~utils/styles/spacing";

// components
import { Heading } from "~components/common/Heading";
import { FlexBox } from "~components/common/FlexBox";

const ProjectDetails: React.FC<ProjectDetailsD> = ({
    name,
    details,
 }) => {

    console.log(details)

    return (
        <>
          <Heading type={'h4'} title={name} />
          {details.map((detail, id) => (
              <FlexBox
                  py={SPACING.md}
                  borderBottom={`1px solid ${COLORS.gray}`}
                  justifyContent={'space-between'}
              >
                  <div>Date: </div>
                  <div>{detail.client}</div>
              </FlexBox>
          ))}
      </>
    )
}


export default ProjectDetails;

