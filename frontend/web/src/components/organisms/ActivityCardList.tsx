import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Activity from "../../types/Activity";
import ActivityCard from "../molecules/ActivityCard";

interface Props {
  activities: Activity[];
}

const ActivityCardList: React.FC<Props> = ({ activities }) => (
  <Stack>
    {activities.map((activity) => (
      <Stack key={activity.name}>
        <Box py={4}>
          <ActivityCard activity={activity} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default ActivityCardList;
