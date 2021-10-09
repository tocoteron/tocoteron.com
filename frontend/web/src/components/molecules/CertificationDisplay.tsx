import React from "react";
import { Heading, Stack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import Certification from "../../types/Certification";
import DateWithIcon from "../atoms/DateWithIcon";

interface Props {
  certification: Certification;
}

const CertificationDisplay: React.FC<Props> = ({ certification }) => (
  <Stack>
    <Heading size="sm">{certification.name}</Heading>
    <DateWithIcon date={certification.date} />
    <Wrap>
      {certification.notes.map((note) => (
        <WrapItem key={note}>
          <Tag>{note}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Stack>
);

export default CertificationDisplay;
