import React from "react";
import { Stack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import Career from "../../types/Career";
import PeriodWithIcon from "../atoms/PeriodWithIcon";
import TextWithLinkHeading from "../atoms/TextLinkWithHeading";
import TextWithLinkLine from "../atoms/TextWithLinkLine";

interface Props {
  career: Career;
}

const CareerCard: React.FC<Props> = ({ career }) => (
  <Stack>
    <TextWithLinkHeading
      text={career.company.text}
      link={career.company.links[0]}
    />
    <Wrap>
      <WrapItem>
        <Tag variant="outline" colorScheme="green">
          {career.employmentStatus}
        </Tag>
      </WrapItem>
      {career.roles.map((role) => (
        <WrapItem key={role}>
          <Tag variant="outline" colorScheme="purple">
            {role}
          </Tag>
        </WrapItem>
      ))}
      {career.domains.map((domain) => (
        <WrapItem key={domain}>
          <Tag variant="subtle">{domain}</Tag>
        </WrapItem>
      ))}
    </Wrap>
    <PeriodWithIcon period={career.period} />
    {career.notes.map((note) => (
      <TextWithLinkLine key={note.text} text={note.text} link={note.links[0]} />
    ))}
  </Stack>
);

export default CareerCard;
