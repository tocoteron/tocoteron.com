import React from "react";
import { Stack } from "@chakra-ui/react";
import WorkExperience from "../../types/WorkExperience";
import WorkExperienceDisplay from "../molecules/WrokExperienceDisplay";

interface Props {
  workExperiences: WorkExperience[];
}

const WorkExperiencesDisplay: React.FC<Props> = ({ workExperiences }) => (
  <Stack>
    {workExperiences.map((workExperience) => (
      <WorkExperienceDisplay
        key={workExperience.company.text}
        workExperience={workExperience}
      />
    ))}
  </Stack>
);

export default WorkExperiencesDisplay;
