import React from "react";
import { OffersWrapper } from "../styled/OlloOffersStyled";
import { BsArrowRightShort } from "react-icons/bs";

const OlloOffers = () => {
  return (
    <OffersWrapper>
      <div className="title">What Mood are you in today?</div>
      <div className="desc">
        oll offers a clean and contemporary to suit a range of purposes from
        corporate, tech startup, marketing site <br /> to digital storefront.
      </div>
      <button className="letsGo">
        <span className="btnType"> Let's Go</span>{" "}
        <span className="btnArrow">
          <BsArrowRightShort />
        </span>
      </button>
    </OffersWrapper>
  );
};

export default OlloOffers;
