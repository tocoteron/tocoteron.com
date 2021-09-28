import React from "react";
import { Divider, Stack } from "@chakra-ui/react";
import Certification from "../../types/Certification";
import CertificationDisplay from "../molecules/CertificationDisplay";

interface Props {
  certifications: Certification[];
}

const CertificationListDisplay: React.FC<Props> = ({ certifications }) => (
  <Stack>
    {certifications.map((certification) => (
      <Stack key={certification.name}>
        <CertificationDisplay certification={certification} />
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default CertificationListDisplay;
