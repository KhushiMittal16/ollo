import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ProjectData } from "../data/ProjectsCardData";
import { ProjectsCardWrapper } from "../styled/ProjectsStyled";
import useViewport from './../viewport/useViewport';

const ProjectsCard = () => {
  const { isTablet } = useViewport();

return(
  <ProjectsCardWrapper isTablet={isTablet}>
    {/* {cardDuis.map((cardStart, i) => ( */}
    {ProjectData.map((proj, i) => (
      <div key={i} className="mapCard">
        <div className="imgCard">
          <img src={proj.picture} alt={proj.altData} width="100%" />
        </div>
        <div className="projDetails">
          <span className="descProj">{proj.cardTitle}</span>
          <span className="arrow">
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    ))}
  </ProjectsCardWrapper>
);}

export default ProjectsCard;
