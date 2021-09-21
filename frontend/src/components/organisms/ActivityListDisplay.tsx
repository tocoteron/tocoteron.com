import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Activity from "../../types/Activity";
import ActivityDisplay from "../molecules/ActivityDisplay";

interface Props {
  activities: Activity[];
}

const ActivityListDisplay: React.FC<Props> = ({ activities }) => (
  <Stack>
    {activities.map((activity) => (
      <Box key={activity.name}>
        <ActivityDisplay activity={activity} />
        <Divider />
      </Box>
    ))}
  </Stack>
);

export default ActivityListDisplay;
