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
      <Stack key={activity.name}>
        <Box py={4}>
          <ActivityDisplay activity={activity} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default ActivityListDisplay;
