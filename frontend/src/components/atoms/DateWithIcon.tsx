import React from "react";
import { CalendarIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import { Date } from "../../types/Time";

interface Props {
  date: Date;
}

const DateWithIcon: React.FC<Props> = ({ date }) => (
  <HStack>
    <CalendarIcon />
    <Text>{`${date.year}/${date.month}/${date.day}`}</Text>
  </HStack>
);

export default DateWithIcon;
