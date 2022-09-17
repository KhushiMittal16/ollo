import styled from "styled-components";

export const OllCarouselWrapper = styled.div`
  background-color: #f8f8f8;
  margin: 6.2em 1em;
  font-family: Source Sans Pro;
  padding-bottom: 1em;

  .rec-arrow-left {
    display: none;
  }

  .rec-arrow-right {
    display: none;
  }

  .rec-dot {
    background-color: rgb(238, 238, 238);
    border-radius: 0px !important;
    border: none;
    box-shadow: none;
    outline: none;
  }

  .rec-dot_active {
    background-color: #02b5ff;
    border-radius: 0px !important;
    border: none;
    box-shadow: none !important;
    outline: none;
  }
`;

export const OllCardWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  padding: 4.2em 0px 3.6em;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};

  .introDiv {
    padding: 0px 7em 1.9em;
    color: #00000099;
    border-right: ${({ isTablet }) => (isTablet ? "0px" : "1px solid #e3e1e1")};
    text-align: center;
  }

  .aboutDiv {
    padding: ${({ isTablet }) => (isTablet ? "1em" : "0px 5% 0px 5em")};
    padding-bottom: 0px;
  }

  .titleDiv {
    color: #393939;
    margin-bottom: 0.8em;
    font-weight: bold;
    font-size: 1.8em;
    font-family: Roboto;
  }

  .nameDiv {
    margin: 1.6em 0px 5px 0px;
    font-size: 18px;
    font-family: Roboto;
    text-transform: capitalize;
  }

  .dateDiv {
    margin-top: 5px;
    text-transform: uppercase;
  }

  .advHead {
    color: #393939;
    margin-bottom: 5px;
    font-size: 1.1em;
    font-weight: 600;
  }
  .adv {
    margin-bottom: 1.25em;
    color: #00000099;
  }

  .cmnt {
    color: #00000099;
  }
`;
