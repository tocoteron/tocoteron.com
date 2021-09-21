import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Certification from "../../types/Certification";
import CertificationDisplay from "../molecules/CertificationDisplay";

interface Props {
  certifications: Certification[];
}

const CertificationListDisplay: React.FC<Props> = ({ certifications }) => (
  <Stack>
    {certifications.map((certification) => (
      <Box key={certification.name}>
        <CertificationDisplay certification={certification} />
        <Divider />
      </Box>
    ))}
  </Stack>
);

export default CertificationListDisplay;
