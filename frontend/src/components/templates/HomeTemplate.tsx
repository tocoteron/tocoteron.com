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
  List,
  ListItem,
  Stack,
  Wrap,
  Button,
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
    <Stack py={8}>
      <HStack>
        <Avatar src={`${process.env.PUBLIC_URL}/logo192.png`} size="xl" />
        <Stack>
          <Heading>tocoteron</Heading>
          <List>
            <ListItem>Computers make me happy.</ListItem>
          </List>
        </Stack>
      </HStack>
      <Wrap>
        <Button
          as="a"
          href="https://github.com/tocoteron"
          target="_blank"
          variant="outline"
        >
          GitHub
        </Button>
        <Button
          as="a"
          href="https://twitter.com/tocoteron"
          target="_blank"
          variant="outline"
        >
          Twitter
        </Button>
      </Wrap>
    </Stack>
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
