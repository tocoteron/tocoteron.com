import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import workExperiences from "../../data/workExperiences";
import WorkExperiences from "../organisms/WorkExperiencesDisplay";

const HomeTemplate: React.FC = () => (
  <Tabs>
    <TabList>
      <Tab>Careers</Tab>
      <Tab>Activities</Tab>
      <Tab>Certifications</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <WorkExperiences workExperiences={workExperiences} />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default HomeTemplate;
