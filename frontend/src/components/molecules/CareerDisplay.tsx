import React from "react";
import { Stack, Tag, Wrap } from "@chakra-ui/react";
import Career from "../../types/Career";
import PeriodWithIcon from "../atoms/PeriodWithIcon";
import TextWithLinkHeading from "../atoms/TextLinkWithHeading";
import TextWithLinkLine from "../atoms/TextWithLinkLine";

interface Props {
  career: Career;
}

const CareerDisplay: React.FC<Props> = ({ career }) => (
  <Stack>
    <TextWithLinkHeading
      text={career.company.text}
      link={career.company.links[0]}
    />
    <Wrap>
      {career.roles.map((role) => (
        <Tag key={role} variant="outline">
          {role}
        </Tag>
      ))}
      {career.domains.map((domain) => (
        <Tag key={domain} variant="subtle">
          {domain}
        </Tag>
      ))}
    </Wrap>
    <PeriodWithIcon period={career.period} />
    {career.notes.map((note) => (
      <TextWithLinkLine key={note.text} text={note.text} link={note.links[0]} />
    ))}
  </Stack>
);

export default CareerDisplay;
