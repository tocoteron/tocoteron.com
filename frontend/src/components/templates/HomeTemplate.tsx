import React from "react";
import workExperiences from "../../data/workExperiences";
import WorkExperiences from "../organisms/WorkExperiencesDisplay";

const HomeTemplate: React.FC = () => (
  <WorkExperiences workExperiences={workExperiences} />
);

export default HomeTemplate;
