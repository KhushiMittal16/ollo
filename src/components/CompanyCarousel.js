import React from "react";
import Carousel from "react-elastic-carousel";
import { companyImages } from "./../data/CompanyImgData";
import "../styled/CompanyStyled.js";
import { CompanyWrapper } from "../styled/CompanyStyled.js";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 3 },
];

const CompanyCarousel = () => {
  return (
    <CompanyWrapper>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed="4000"
        style={{ padding: "6.2em 0px" }}
      >
        {companyImages.map((v, i) => (
          <img src={v.img1} key={i} alt={v.altVal} />
        ))}
      </Carousel>
    </CompanyWrapper>
  );
};

export default CompanyCarousel;
