import React from "react";
import { Nav1Wrapper } from "../styled/Nav1Styled";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import useViewport from "../viewport/useViewport";

const Nav1 = () => {
  const { isTablet,isMobile } = useViewport();
  return (
    <Nav1Wrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="navContact">
        <div className="numStart">
          <div className="numberHead">Phone Number &nbsp;:&nbsp;</div>
          <a href="tel:(+88)01912704287">(+88)01912704287</a>
        </div>
        <div className="email">
          <div className="emailHead">Contact Email &nbsp;:&nbsp;</div>
          <a href="mailto:info@domain.com">info@domain.com</a>
        </div>
      </div>
      <div className="socialMedia">
        <div className="socialIcons">
          <a href="#" target="_blank">
            <FaFacebookF />
          </a>
        </div>
        <div className="socialIcons">
          <a href="#" target="_blank">
            <FaDribbble />
          </a>
        </div>
        <div className="socialIcons">
          <a href="#" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="socialIcons">
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
    </Nav1Wrapper>
  );
};

export default Nav1;
