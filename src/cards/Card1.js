import React from "react";
import ButtonRead from "../components/ButtonRead";
import { CardWrapper } from "../styled/Card1Styled";
// import { cardDuis } from "../data/CreativeCard";
import useViewport from "./../viewport/useViewport";
 
const CardStart = ({ cardDataName, btnShow }) => {
  const { isTablet,isMobile } = useViewport();
  return (
    <CardWrapper isTablet={isTablet} isMobile={isMobile}>
      {cardDataName.map((cardStart, i) => (
        <div key={i} className="mapCard">
          <i className={cardStart.icons} />
          <div className="titleCard">{cardStart.cardTitle}</div>
          <div className="cardDesc">{cardStart.description}</div>
          {btnShow ? (
            <div className="btnDiv">
              {" "}
              <ButtonRead btnTitle="Read More" />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </CardWrapper>
  );
};

export default CardStart;
