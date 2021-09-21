import React from "react";
import { Heading, Stack, Wrap, Tag } from "@chakra-ui/react";
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
        <Tag key={note}>{note}</Tag>
      ))}
    </Wrap>
  </Stack>
);

export default ActivityDisplay;
