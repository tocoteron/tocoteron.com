import React from "react";
import workExperiences from "../../data/workExperiences";
import WorkExperiences from "../organisms/WorkExperiences";

export default function HomeTemplate(): JSX.Element {
  return <WorkExperiences workExperiences={workExperiences} />;
}
