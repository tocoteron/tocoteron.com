import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Career from "../../types/Career";
import CareerCard from "../molecules/CareerCard";

interface Props {
  careers: Career[];
}

const CareerCardList: React.FC<Props> = ({ careers }) => (
  <Stack>
    {careers.map((career) => (
      <Stack key={career.company.text}>
        <Box py={4}>
          <CareerCard career={career} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default CareerCardList;
