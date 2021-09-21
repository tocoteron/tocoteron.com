import React from "react";
import { Divider, Stack } from "@chakra-ui/react";
import Activity from "../../types/Activity";
import ActivityDisplay from "../molecules/ActivityDisplay";

interface Props {
  activities: Activity[];
}

const ActivityListDisplay: React.FC<Props> = ({ activities }) => (
  <Stack>
    {activities.map((activity) => (
      <>
        <ActivityDisplay activity={activity} />
        <Divider />
      </>
    ))}
  </Stack>
);

export default ActivityListDisplay;
