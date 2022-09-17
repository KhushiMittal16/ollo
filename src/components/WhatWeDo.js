import React from "react";
import { WhatWeDoWrapper } from "../styled/WhatWeDoStyled";

const WhatWeDo = ({ headTitle,topHead }) => {
  return (
    <WhatWeDoWrapper>
      <div className="titleWwd">
        <div className="wwdHead">{topHead}</div>
        <div className="head">{headTitle}</div>
      </div>
      <div className="line"></div>
      <div className="desc">
        We always provide a business driven products that leads to customer
        satisfaction and make them to
        <br /> work with us again and again
      </div>
    </WhatWeDoWrapper>
  );
};

export default WhatWeDo;
