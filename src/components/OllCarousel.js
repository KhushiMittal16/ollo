import React from "react";
import { OllCarouselWrapper } from "../styled/OllCarouselStyled";
import OllCard from "./../cards/OllCard";
import { ollData } from "./../data/OllCardData";
import Carousel from "react-elastic-carousel";

const OllCarousel = () => {
  return (
    <OllCarouselWrapper>
      <Carousel enableAutoPlay autoPlaySpeed={4000}>
        {ollData.map((data, i) => (
          <OllCard
            key={i}
            image={data.imgSrc}
            altText={data.altVal}
            name={data.names}
            para={data.para}
            date={data.date}
            title={data.title}
            adv={data.adv}
            disAdv={data.disAdv}
            cmnt={data.cmnt}
          />
        ))}
      </Carousel>
    </OllCarouselWrapper>
  );
};

export default OllCarousel;
