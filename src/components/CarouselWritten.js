import React from "react";
import { WrittenStyled } from "../styled/CarouselCardStyled";
import useViewport from "./../viewport/useViewport";

const CarouselWritten = () => {
  const { isMobile, isTablet, isMidrange } = useViewport();
  return (
    <WrittenStyled
      isMobile={isMobile}
      isTablet={isTablet}
      isMidrange={isMidrange}
    >
      <div className="weOll">We are oll</div>
      <div className="startingBusiness">Starting a Business</div>
      <div className="inspireSuccess">
        Inspire success in your life and business, with over 11 years of
        experience helping
      </div>
      <div className="inspireSuccess">
        businesses to find comprehensive solutions
      </div>
      <div className="buttons">
        <button className="readBtn">Read More</button>
        <button className="readBtn">Contact Us</button>
      </div>
    </WrittenStyled>
  );
};

export default CarouselWritten;
