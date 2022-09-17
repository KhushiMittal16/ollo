import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavMainWrapper, NavMainMidrange } from "../styled/NavMainStyled";
import olloLogo from "../assets/olloLogo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import useViewport from "./../viewport/useViewport";
import DropdownNav from "./DropdownNav";
// import {  } from "../styled/Nav1Styled";

const NavMain = ({ searchClk }) => {
  const { isMidrange, isMobile } = useViewport();
  const [menuDrop, setMenuDrop] = useState(false);

  const showDropdown = () => {
    setMenuDrop(!menuDrop);
    const val= !menuDrop;
    console.log(val);
  };
  return (
    <>
      {!isMidrange ? (
        <NavMainWrapper>
          <div className="logoOllo">
            <Link to="/">
              <img src={olloLogo} alt="logo" />
            </Link>
          </div>
          <div className="linksNav">
            <div className="otherLinks">
              <div className="home">
                <Link to="/">
                  Home
                  <RiArrowDropDownLine />
                </Link>
              </div>
              <div className="home">
                <Link to="/">
                  Services
                  <RiArrowDropDownLine />
                </Link>
              </div>
              <div className="home">
                <Link to="/">About Us</Link>
              </div>
              <div className="home">
                <Link to="/">
                  Page
                  <RiArrowDropDownLine />
                </Link>
              </div>
              <div className="home">
                <Link to="/">
                  Projects
                  <RiArrowDropDownLine />
                </Link>
              </div>
              <div className="home">
                <Link to="/">
                  Blog
                  <RiArrowDropDownLine />
                </Link>
              </div>
              <div className="home">
                <Link to="/">Contact</Link>
              </div>
            </div>
            <div className="btnSearch">
              <button className="search" onClick={searchClk}>
                <BsSearch />
              </button>
            </div>
          </div>
        </NavMainWrapper>
      ) : (
        <>
        <NavMainMidrange isMidrange={isMidrange} isMobile={isMobile}>
          <div className="logoOllo">
            <Link to="/">
              <img src={olloLogo} alt="logo" />
            </Link>
          </div>
          <div className="icons">
            <div className="btnSearch">
              <button className="search" onClick={searchClk}>
                <BsSearch />
              </button>
            </div>
            <div className="menuDiv" onClick={showDropdown}>
              <button className="menuBtn">
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </NavMainMidrange>
          {menuDrop ? <DropdownNav /> : ""}
          </>
      )}
    </>
  );
};

export default NavMain;
