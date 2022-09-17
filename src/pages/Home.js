import React from "react";
import { useState } from "react";
import { SearchWrapper } from "../styled/NavMainStyled";
import olloLogo from "../assets/olloLogo.png";
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import CompanyCarousel from "../components/CompanyCarousel";
import CardStart from "../cards/Card1";
import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";
import NavMain from "../components/NavMain";
import OlloOffers from "../components/OlloOffers";
import Pricing from "../components/Pricing";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Update from "../components/Update";
import { cardDuis } from "../data/CreativeCard";
import CarouselNew from './../components/CarouselTop';
import OllCarousel from './../components/OllCarousel';

const Home = () => {
  const [searchShow, setSearchShow] = useState(false);

  const searchClk = () => {
    setSearchShow(true);
  };
  const crossClk = () => {
    setSearchShow(false);
  };
  return (
    <div>
      {searchShow ? (
        <SearchWrapper>
          <div className="crossBtn">
            <button className="cross" onClick={crossClk}>
              <ImCross />
            </button>
          </div>
          <div className="logo">
            <img src={olloLogo} alt="logo" />
          </div>
          <div className="searchInput">
            <input type="text" placeholder="Type what you want and enter" />
            <button className="inputBtn">
              <BsSearch />
            </button>
          </div>
        </SearchWrapper>
      ) : (
        <>
          <Nav1 />
          <NavMain searchShow={searchShow} searchClk={searchClk} />
          <CarouselNew />
          <CardStart cardDataName={cardDuis} btnShow={true} />
          <OlloOffers />
          <Services />
          <OllCarousel/>
          <Projects />
          <Pricing/>
          <Update />
          <CompanyCarousel/>
          <Footer />
        </>
      )}

      {/* rough(to check) */}
      {/* <CarouselComp /> */}
      {/* <ButtonRead btnTitle="Read More" /> */}
      {/* <CardStart cardDataName={servicesCards} btnShow={false} /> */}
      {/* <CardStart cardDataName={servicesCards} /> */}
    </div>
  );
};

export default Home;
