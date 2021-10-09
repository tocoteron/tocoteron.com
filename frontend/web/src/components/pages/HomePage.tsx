import React from "react";
import HomeTemplate from "../templates/HomeTemplate";
import accounts from "../../data/accounts";
import careers from "../../data/careers";
import activities from "../../data/activities";
import certifications from "../../data/certifications";

const HomePage: React.FC = () => (
  <HomeTemplate
    iconLink={`${process.env.PUBLIC_URL}/logo192.png`}
    name="tocoteron"
    phrase="Computers make me happy."
    accounts={accounts}
    careers={careers}
    activities={activities}
    certifications={certifications}
  />
);

export default HomePage;
