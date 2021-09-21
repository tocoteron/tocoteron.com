import React from "react";
import { Stack } from "@chakra-ui/react";
import Activity from "../../types/Activity";
import ActivityDisplay from "../molecules/ActivityDisplay";

interface Props {
  activities: Activity[];
}

const ActivitiesDisplay: React.FC<Props> = ({ activities }) => (
  <Stack>
    {activities.map((activity) => (
      <ActivityDisplay activity={activity} />
    ))}
  </Stack>
);

export default ActivitiesDisplay;
