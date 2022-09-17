import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { DropdownWrapper } from "../styled/DropdownStyled";

const DropdownNav = () => {
  return (
    <DropdownWrapper>
      <div className="home">
        <Link to="/">
          <div className="compDrop">Home</div>
          <div className="downArrow">
            <AiOutlineDown />
          </div>
        </Link>
      </div>
      <div className="home">
        <Link to="/">
          <div className="compDrop">Services</div>
          <div className="downArrow">
            <AiOutlineDown />
          </div>
        </Link>
      </div>
      <div className="home">
        <Link to="/">About Us</Link>
      </div>
      <div className="home">
        <Link to="/">
          <div className="compDrop">Page</div>
          <div className="downArrow">
            <AiOutlineDown />
          </div>
        </Link>
      </div>
      <div className="home">
        <Link to="/">
          <div className="compDrop">Projects</div>
          <div className="downArrow">
            <AiOutlineDown />
          </div>
        </Link>
      </div>
      <div className="home">
        <Link to="/">
          <div className="compDrop">Blog</div>
          <div className="downArrow">
            <AiOutlineDown />
          </div>
        </Link>
      </div>
      <div className="home">
        <Link to="/">Contact</Link>
      </div>
    </DropdownWrapper>
  );
};

export default DropdownNav;
