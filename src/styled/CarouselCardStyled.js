import styled from "styled-components";
import carousel1 from "../assets/corosel1.jpg";
import carousel2 from "../assets/corosel2.jpg";

export const CarouselCard1Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${carousel1});
  background-size: cover;
  color: #fff;
  text-align: left;
  font-family: Roboto;
`;

export const CarouselCard2Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${carousel2});
  background-size: cover;
  color: #fff;
  text-align: left;
  font-family: Roboto;
`;

export const WrittenStyled = styled.div`
  padding-top: ${({ isMidrange, isTablet }) =>
    isTablet ? "15%" : isMidrange ? "17.5%" : "15%"};
  margin-left: ${({ isMidrange, isTablet, isMobile }) =>
    isTablet ? "3%" : isMidrange ? "7%" : "10%"};
  padding-bottom: 10%;

  .weOll {
    color: #fff8f8;
    font-size: ${({ isMidrange, isTablet, isMobile }) =>
      isTablet ? "0.6em" : isMidrange ? "1em" : "1.5em"};
    font-weight: 400;
    z-index: 998;
  }

  .startingBusiness {
    color: #fff;
    padding: 0.2em 0px;
    font-size: ${({ isMidrange, isTablet, isMobile }) =>
      isMobile ? "1.5em" : isTablet ? "2em" : isMidrange ? "3em" : "4.8em"};
    font-weight: 800;
  }

  .inspireSuccess {
    display: ${({ isMidrange, isTablet }) => (isTablet ? "none" : "")};
    z-index: 997 !important;
    color: #ffffff !important;
    font-size: 1.2em;
    font-weight: 400;
    font-family: "Roboto";
  }

  .buttons {
    display: flex !important;
    padding-top: 0.7em;
  }

  .readBtn {
    background: transparent;
    border: 1px solid #fff;
    padding: 0.5em 1.1em;
    text-align: center;
    font-size: ${({ isMidrange, isTablet, isMobile }) =>
      isTablet ? "0.7em" : isMidrange ? "0.9em" : "1.33em"};
    font-family: Roboto;
    text-decoration: none;
    color: #fff;
    border-radius: 25em;
    margin-right: 1em;

    &:hover{
      background-color: #02b5ff;
      border: none;
    }
  }
`;
