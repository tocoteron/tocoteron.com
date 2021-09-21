import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CareerListDisplay from "../organisms/CareerListDisplay";
import ActivitiesDisplay from "../organisms/ActivityListDisplay";
import CertificationListDisplay from "../organisms/CertificationListDisplay";
import Career from "../../types/Career";
import Activity from "../../types/Activity";
import Certificaiton from "../../types/Certification";

interface Props {
  careers: Career[];
  activities: Activity[];
  certifications: Certificaiton[];
}

const HomeTemplate: React.FC<Props> = ({
  careers,
  activities,
  certifications,
}) => (
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
      <TabPanel>
        <CertificationListDisplay certifications={certifications} />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default HomeTemplate;
