import React from "react";
import {
  Avatar,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Heading,
} from "@chakra-ui/react";
import CareerListDisplay from "../organisms/CareerListDisplay";
import ActivityListDisplay from "../organisms/ActivityListDisplay";
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
  <>
    <HStack py={8}>
      <Avatar src={`${process.env.PUBLIC_URL}/logo192.png`} size="xl" />
      <Heading>tocoteron</Heading>
    </HStack>
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
          <ActivityListDisplay activities={activities} />
        </TabPanel>
        <TabPanel>
          <CertificationListDisplay certifications={certifications} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

export default HomeTemplate;
