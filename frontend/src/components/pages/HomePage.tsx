import React from "react";
import { Container } from "@chakra-ui/react";
import HomeTemplate from "../templates/HomeTemplate";
import careers from "../../data/careers";
import activities from "../../data/activities";
import certifications from "../../data/certifications";

const HomePage: React.FC = () => (
  <Container>
    <HomeTemplate
      careers={careers}
      activities={activities}
      certifications={certifications}
    />
  </Container>
);

export default HomePage;
