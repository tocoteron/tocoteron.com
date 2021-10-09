import React from "react";
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import IdentityDisplay from "../organisms/IdentityDisplay";
import ProfileDisplay from "../organisms/ProfileDisplay";
import CareerListDisplay from "../organisms/CareerListDisplay";
import ActivityListDisplay from "../organisms/ActivityListDisplay";
import CertificationListDisplay from "../organisms/CertificationListDisplay";
import Account from "../../types/Account";
import Career from "../../types/Career";
import Activity from "../../types/Activity";
import Certificaiton from "../../types/Certification";

interface Props {
  iconLink: string;
  name: string;
  phrase: string;
  accounts: Account[];
  careers: Career[];
  activities: Activity[];
  certifications: Certificaiton[];
}

const HomeTemplate: React.FC<Props> = ({
  iconLink,
  name,
  phrase,
  accounts,
  careers,
  activities,
  certifications,
}) => (
  <Container>
    <IdentityDisplay
      iconLink={iconLink}
      name={name}
      phrase={phrase}
      accounts={accounts}
    />
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Careers</Tab>
        <Tab>Activities</Tab>
        <Tab>Certs</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ProfileDisplay />
        </TabPanel>
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
  </Container>
);

export default HomeTemplate;
