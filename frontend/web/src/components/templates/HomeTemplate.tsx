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
import CareerCardList from "../organisms/CareerCardList";
import ActivityCardList from "../organisms/ActivityCardList";
import CertificationCardList from "../organisms/CertificationCardList";
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
          <CareerCardList careers={careers} />
        </TabPanel>
        <TabPanel>
          <ActivityCardList activities={activities} />
        </TabPanel>
        <TabPanel>
          <CertificationCardList certifications={certifications} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Container>
);

export default HomeTemplate;
