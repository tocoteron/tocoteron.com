import React from "react";
import { Divider, Heading, Stack, Wrap, Tag } from "@chakra-ui/react";
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
        <Tag>{note}</Tag>
      ))}
    </Wrap>
    <Divider />
  </Stack>
);

export default ActivityDisplay;
