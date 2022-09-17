import React from "react";
import {
  CarouselCard1Wrapper,
  CarouselCard2Wrapper,
} from "../styled/CarouselCardStyled";
import useViewport from "../viewport/useViewport";
import CarouselWritten from "./CarouselWritten";

export const CarouselCard1 = () => {
  return (
    <CarouselCard1Wrapper>
      <CarouselWritten />
    </CarouselCard1Wrapper>
  );
};

export const CarouselCard2 = () => {
  const { isMobile, isTablet, isMidrange } = useViewport();
  return (
    <CarouselCard2Wrapper
      isMobile={isMobile}
      isTablet={isTablet}
      isMidrange={isMidrange}
    >
      <CarouselWritten />
    </CarouselCard2Wrapper>
  );
};
