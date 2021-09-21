import React from "react";
import { Stack } from "@chakra-ui/react";
import WorkExperience from "../../types/WorkExperience";
import WorkExperienceDisplay from "../molecules/WrokExperience";

interface Props {
  workExperiences: WorkExperience[];
}

export default function WorkExperiences({
  workExperiences,
}: Props): JSX.Element {
  return (
    <Stack>
      {workExperiences.map((workExperience) => (
        <WorkExperienceDisplay
          key={workExperience.company.text}
          workExperience={workExperience}
        />
      ))}
    </Stack>
  );
}
