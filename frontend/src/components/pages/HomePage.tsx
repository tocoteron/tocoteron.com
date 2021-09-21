import React from "react";
import { Container } from "@chakra-ui/react";
import HomeTemplate from "../templates/HomeTemplate";
import careers from "../../data/careers";
import activities from "../../data/activities";

const HomePage: React.FC = () => (
  <Container>
    <HomeTemplate careers={careers} activities={activities} />
  </Container>
);

export default HomePage;
