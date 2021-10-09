import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Certification from "../../types/Certification";
import CertificationCard from "../molecules/CertificationCard";

interface Props {
  certifications: Certification[];
}

const CertificationCardList: React.FC<Props> = ({ certifications }) => (
  <Stack>
    {certifications.map((certification) => (
      <Stack key={certification.name}>
        <Box py={4}>
          <CertificationCard certification={certification} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default CertificationCardList;
