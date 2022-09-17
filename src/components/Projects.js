import React from "react";
import ProjectsCard from "../cards/ProjectsCard";
import ButtonRead from "./ButtonRead";
import WhatWeDo from "./WhatWeDo";
import { ProjectsWrapper } from "../styled/ProjectsStyled";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <WhatWeDo topHead="What We Do" headTitle="Projects" />
      <ProjectsCard />
      <div className="btnproj">
        <ButtonRead btnTitle="Show more projects" showArrow={true} />
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
