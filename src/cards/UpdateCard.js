import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { updateCardData } from "../data/UpdateBlogCardData";
import { UpdateCardWrapper } from "../styled/UpdateStyled";
import useViewport from "./../viewport/useViewport";

const UpdateCard = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <UpdateCardWrapper isTablet={isTablet} isMobile={isMobile}>
      {updateCardData.map((update, i) => (
        <div key={i} className="mapCard">
          {/* <i className={services.icons} /> */}
          <div className="imgCard">
            <img src={update.updatePic} alt={update.alt} width="100%" />
          </div>
          <div className="updAll">
            <div className="dateUpd">{update.date}</div>
            <div className="updTitle">{update.title}</div>
            <div className="updDesc">
              {update.desc}
              <div className="mainArrow">
                <div className="arrow">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </UpdateCardWrapper>
  );
};

export default UpdateCard;
