import React from "react";
import { OllCardWrapper } from "../styled/OllCarouselStyled";
import useViewport from "./../viewport/useViewport";

const OllCard = ({
  image,
  altText,
  name,
  para,
  date,
  title,
  adv,
  disAdv,
  cmnt,
}) => {
  const { isTablet } = useViewport();
  return (
    <OllCardWrapper isTablet={isTablet}>
      <div className="introDiv">
        <img src={image} alt={altText} />
        <div className="nameDiv">{name}</div>
        <div className="para">{para}</div>
        <div className="dateDiv">{date}</div>
      </div>
      <div className="aboutDiv">
        <div className="titleDiv">{title}</div>
        <div className="advHead">Advantage</div>
        <div className="adv">{adv}</div>
        <div className="advHead">Disadvantage</div>
        <div className="adv">{disAdv}</div>
        <div className="advHead">Comment</div>
        <div className="cmnt">{cmnt}</div>
      </div>
    </OllCardWrapper>
  );
};

export default OllCard;
