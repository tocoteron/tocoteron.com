import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Date, Period } from "../../types/Time";

interface Props {
  period: Period;
}

const PeriodWithIcon: React.FC<Props> = ({ period }) => {
  const toStr = (date?: Date) =>
    date ? `${date.year}/${date.month}/${date.day}` : "";

  const since = toStr(period.since);
  const until = toStr(period.until);

  return (
    <HStack>
      <CalendarIcon />
      <Text>
        {since} ~ {until}
      </Text>
    </HStack>
  );
};

export default PeriodWithIcon;
