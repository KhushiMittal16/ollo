import React from "react";
import { ButtonWrapper, ButtonDivWrapper } from "../styled/ButtonStyled";
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonRead = ({ btnTitle, showArrow = false }) => {
  return (
    <ButtonDivWrapper>
      <ButtonWrapper>
        <span className="btnTitle">{btnTitle}</span>
        {showArrow ? (
          <span className="btnArrow">
            <AiOutlineArrowRight />
          </span>
        ) : (
          ""
        )}
      </ButtonWrapper>
    </ButtonDivWrapper>
  );
};

export default ButtonRead;
