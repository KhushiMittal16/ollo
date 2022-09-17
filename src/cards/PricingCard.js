import React from "react";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
// import ButtonRead from "../components/ButtonRead";
import { pricingData } from "../data/PricingCardData";
import { PricingCardWrapper, TryNowWrapper } from "../styled/PricingStyled";
import useViewport from './../viewport/useViewport';

const PricingCard = () => {
  
  const { isTablet,isMobile } = useViewport();
  return(
  <PricingCardWrapper isTablet={isTablet} isMobile={isMobile}>
    {pricingData.map((price, i) => (
      <div key={i} className="mapCard">
        <div className="plans">{price.plan}</div>
        <div className="pricingCircle">
          <AiOutlineCheck />
        </div>
        <div className="plan_desc">
          Best Support Free updates Easy <br />
          to Customize Unlimited
          <br /> Features
          {/* {price.planDesc} */}
        </div>
        <div className="priceValue">
          <sup>$</sup>
          {price.priceVal}
          {/* <div className="prices">{price.priceVal}</div> */}
        </div>

        <TryNowWrapper>
          <button className="btnTryNow">
            Try it Now{" "}
            <span className="spanArrow">
              <AiOutlineArrowRight />
            </span>
          </button>
        </TryNowWrapper>
      </div>
    ))}
  </PricingCardWrapper>
);}

export default PricingCard;
