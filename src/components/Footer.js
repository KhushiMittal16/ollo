import React from "react";
import { Link } from "react-router-dom";
import olloLogo from "../assets/olloLogo.png";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
  FaVimeoV,
  FaAddressBook,
} from "react-icons/fa";
import {
  FooterWrapper,
  FooterAllWrapper,
  FooterBottom,
} from "../styled/FooterStyled";
import useViewport from "../viewport/useViewport";

const Footer = () => {
  const { isTablet } = useViewport();
  return (
    <FooterWrapper isTablet={isTablet}>
      <FooterAllWrapper isTablet={isTablet}>
        <div className="contact">
          <Link to="/">
            <img src={olloLogo} alt="ollo" />
          </Link>
          <div className="contactDetails">
            <div className="contacts">
              {/* <i className="" /> */}
              <AiTwotonePhone />
              <div className="contactDet">( +88 ) 01912704281</div>
            </div>
            <div className="contacts">
              {/* <i className="" /> */}
              <AiOutlineMail />
              <div className="contactDet">info@domain.com</div>
            </div>
            <div className="contacts">
              <FaAddressBook />
              <div className="contactDet">
                123 Fake Street- Panama Road,
                <br /> 12/1, London
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="head">About</div>
          <div className="allAbouts">
            <div className="aboutLink">
              <Link to="/">About</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Blog</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Business Partner</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Contact</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Faq</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Home</Link>
            </div>
            <div className="aboutLink">
              <Link to="/">Services</Link>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="head">Partners</div>
          <div className="allPartners">
            <div className="partnerLink">
              <Link to="/">Jquery</Link>
            </div>
            <div className="partnerLink">
              <Link to="/">Business Partners</Link>
            </div>
            <div className="partnerLink">
              <Link to="/">Team</Link>
            </div>
            <div className="partnerLink">
              <Link to="/">URL</Link>
            </div>
          </div>
        </div>
        <div className="followSubs">
          <div className="follow">
            <div className="head">Follow us</div>
            <div className="allIcons">
              <span className="socialIcons">
                {/* <i className="" /> */}
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
              </span>
              <span className="socialIcons">
                <a href="#" target="_blank">
                  <FaDribbble />
                </a>
                {/* <i className="" /> */}
              </span>
              <span className="socialIcons">
                <a href="#" target="_blank">
                  <FaLinkedinIn />
                </a>
                {/* <i className="" /> */}
              </span>
              <span className="socialIcons">
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
                {/* <i className="" /> */}
              </span>
              <span className="socialIcons">
                <a href="#" target="_blank">
                  <FaVimeoV />
                </a>
                {/* <i className="" /> */}
              </span>
            </div>
          </div>

          <div className="subscribe">
            <div className="subsHead">Subscribe</div>
            <div className="subsAll">
              <input type="email" required />
              <button className="subsBtn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </FooterAllWrapper>
      {/* <hr /> */}
      <FooterBottom>
        <span className="bottom1">
          Copyright <i className="fa-copyright" /> 2017{" "}
          <a href="/" target="_blank">
            Oll
          </a>{" "}
          Template by{" "}
          <a href="/" target="_blank">
            Company
          </a>{" "}
        </span>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
