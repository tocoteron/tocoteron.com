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
      <Stack key={certification.name}>
        <Box py={4}>
          <CertificationDisplay certification={certification} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default CertificationListDisplay;
