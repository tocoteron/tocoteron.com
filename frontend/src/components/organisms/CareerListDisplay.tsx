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
      <Box key={career.company.text}>
        <CareerDisplay career={career} />
        <Divider />
      </Box>
    ))}
  </Stack>
);

export default CareerListDisplay;
