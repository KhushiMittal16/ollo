import React from "react";
// import { pricingData } from "../data/PricingCardData";
import { PricingWrapper } from "../styled/PricingStyled";
import useViewport from "../viewport/useViewport";
import PricingCard from "./../cards/PricingCard";

const Pricing = () => {
  const { isTablet,isMobile } = useViewport();
  return (
    <PricingWrapper isTablet={isTablet} isMobile={isMobile}>
      {/* <div className="wholePricing"> */}
      <div className="detailsTop">
        <div className="choosePlan">Choose Pricing Plan</div>
        <div className="descPricing">
          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam
          <br /> semper libero, sit amet adipiscing sem neque
        </div>
      </div>
      <PricingCard />
      {/* </div> */}
    </PricingWrapper>
  );
};

export default Pricing;
