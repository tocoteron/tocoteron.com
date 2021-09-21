import React from "react";
import { Stack, Tag, Wrap, Divider } from "@chakra-ui/react";
import WorkExperience from "../../types/WorkExperience";
import PeriodWithIcon from "../atoms/PeriodWithIcon";
import TextWithLinkHeading from "../atoms/TextLinkWithHeading";
import TextWithLinkLine from "../atoms/TextWithLinkLine";

interface Props {
  workExperience: WorkExperience;
}

export default function WorkExperienceDisplay({
  workExperience,
}: Props): JSX.Element {
  return (
    <Stack>
      <TextWithLinkHeading
        text={workExperience.company.text}
        link={workExperience.company.links[0]}
      />
      <Wrap>
        {workExperience.roles.map((role) => (
          <Tag key={role} variant="outline">
            {role}
          </Tag>
        ))}
        {workExperience.domains.map((domain) => (
          <Tag key={domain} variant="subtle">
            {domain}
          </Tag>
        ))}
      </Wrap>
      <PeriodWithIcon period={workExperience.period} />
      {workExperience.notes.map((note) => (
        <TextWithLinkLine
          key={note.text}
          text={note.text}
          link={note.links[0]}
        />
      ))}
      <Divider />
    </Stack>
  );
}
