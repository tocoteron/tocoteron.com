import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Career from "../../types/Career";
import CareerDisplay from "../molecules/CareerDisplay";

interface Props {
  careers: Career[];
}

const CareerListDisplay: React.FC<Props> = ({ careers }) => (
  <Stack>
    {careers.map((career) => (
      <Stack key={career.company.text}>
        <Box py={4}>
          <CareerDisplay career={career} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default CareerListDisplay;
