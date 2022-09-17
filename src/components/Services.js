import React from "react";
import { servicesCards } from "./../data/ServicesCardData";
import CardStart from "./../cards/Card1";
// import ServiceCard from "../cards/ServiceCard";
import WhatWeDo from "./WhatWeDo";
import ButtonRead from "./ButtonRead";

const Services = () => {
  return (
    <div>
      {/* <ServiceCard /> */}
      <WhatWeDo headTitle="Services" />
      <CardStart cardDataName={servicesCards} btnShow={false} />
      <div className="btnproj">
        <ButtonRead btnTitle="Show more services" showArrow={true} />
      </div>
    </div>
  );
};

export default Services;
