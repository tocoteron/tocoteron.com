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
      <>
        <CertificationDisplay certification={certification} />
        <Divider />
      </>
    ))}
  </Stack>
);

export default CertificationListDisplay;
