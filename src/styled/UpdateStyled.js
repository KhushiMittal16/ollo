import styled from "styled-components";

export const UpdateCardWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  margin: 1.5em;
  font-family: Source Sans Pro;

  .mapCard {
    border: 1px solid #e9e4e4;
    /* width: 30%; */
    margin: ${({ isTablet, isMobile }) =>
      isMobile ? "10px 1em" : isTablet ? "10px 4.5em" : "0px 15px"};
    /* text-align: center; */
    .imgCard {
      overflow: hidden;
    }
    &:hover {
      .updTitle {
        transition: all 0.4s ease-in-out;
        color: #02b5ff;
      }
      img {
        transform: scale(1.1);
        transition: all 0.4s ease-in-out;
      }
      .arrow {
        background-color: #02b5ff;
        border: 1px solid #fff;
        color: #ffffff;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .updAll {
    padding: 1.1em 1.2em 1.4em;
  }

  .dateUpd {
    color: #00000099;
  }

  .updTitle {
    font-size: 1.4em;
    color: #323232;
    font-weight: bold;
    font: Roboto;
    margin: 0.75em 0px;
  }

  .projDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1em 3em;
  }

  .mainArrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.7em;
  }

  .arrow {
    padding: 0.8em 1em;
    color: #d1cccc;
    font-weight: bolder;
    border-radius: 50%;
    border: 1px solid #e9e4e4;
    background-color: #ffffff;
    font-weight: bolder;
  }

  .updDesc {
    color: #00000099;
  }
`;
