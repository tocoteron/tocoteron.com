import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CareerListDisplay from "../organisms/CareerListDisplay";
import ActivitiesDisplay from "../organisms/ActivityListDisplay";
import Career from "../../types/Career";
import Activity from "../../types/Activity";

interface Props {
  careers: Career[];
  activities: Activity[];
}

const HomeTemplate: React.FC<Props> = ({ careers, activities }) => (
  <Tabs>
    <TabList>
      <Tab>Careers</Tab>
      <Tab>Activities</Tab>
      <Tab>Certifications</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <CareerListDisplay careers={careers} />
      </TabPanel>
      <TabPanel>
        <ActivitiesDisplay activities={activities} />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default HomeTemplate;
