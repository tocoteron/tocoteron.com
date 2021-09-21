import React from "react";
import { Divider, Stack } from "@chakra-ui/react";
import Career from "../../types/Career";
import CareerDisplay from "../molecules/CareerDisplay";

interface Props {
  careers: Career[];
}

const CareerListDisplay: React.FC<Props> = ({ careers }) => (
  <Stack>
    {careers.map((career) => (
      <>
        <CareerDisplay key={career.company.text} career={career} />
        <Divider />
      </>
    ))}
  </Stack>
);

export default CareerListDisplay;