import React from "react";
import { Heading, Stack, Wrap, Tag, WrapItem } from "@chakra-ui/react";
import PeriodWithIcon from "../atoms/PeriodWithIcon";
import Activity from "../../types/Activity";

interface Props {
  activity: Activity;
}

const ActivityDisplay: React.FC<Props> = ({ activity }) => (
  <Stack>
    <Heading size="sm">{activity.name}</Heading>
    <PeriodWithIcon period={activity.period} />
    <Wrap>
      {activity.notes.map((note) => (
        <WrapItem key={note}>
          <Tag>{note}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Stack>
);

export default ActivityDisplay;
