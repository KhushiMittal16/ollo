import styled from "styled-components";
export const PricingWrapper = styled.div`
  margin: 5em 0px 6em;
  padding: ${({ isTablet,isMobile }) => isMobile?"5.5em 1.5em":(isTablet ? "5.5em 4em" : "5.5em 1em")};
  background-color: #f8f8f8;
  font-family: Roboto, sans-serif;

  .descPricing {
    color: #000000b3;
    font-size: 1.1em;
    margin-top: 1.7em;
  }

  .detailsTop {
    text-align: center;
  }

  .choosePlan {
    font-weight: bolder;
    font-size: 2.6em;
    color: #323232;
  }
`;

export const PricingCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  justify-content: space-evenly; 
  font-family: Roboto, sans-serif;

  .mapCard {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: 2.9em;
    padding:  ${({ isTablet }) => (isTablet ? "2em" : "2.1em 2em 2.8em 2em")}; 
    width: ${({ isTablet,isMobile }) => isMobile?"100%":(isTablet ? "70%" : "26%")};
    text-align: center;
    transition: transform 0.9s;
 
    &:hover {
      background-color: #ffffff;
      transform: scale(1.1);
      filter: drop-shadow(5px 5px 5px hsl(0deg 0% 0%/0.05));
      .btnTryNow {
        background: #02b5ff;
        color: #ffffff;
      }
    }
  }

  .pricingCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7%;
    border: 2px solid #02b5ff;
    border-radius: 50%;
    font-size: 2em;
    color: #02b5ff;
  }

  .plans {
    margin-bottom: 1.8em;
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 300;
    color: #393939;
  }

  .plan_desc {
    font-family: Source Sans Pro;
    color: #00000099;
    padding-top: 1.3em;
  }

  .priceValue {
    margin: 0.45em 0px 0.6em;
    color: #02b5ff;
    font-size: 3.1em;
    font-weight: bold;
  }

  sup {
    color: #00000099;
    font-size: 0.4em;
    font-weight: 400;
  }
`;

export const TryNowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 3.9em; */
  .btnTryNow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #02b5ff;
    border: 1px solid #02b5ff !important;
    ${"" /* width: 9em; */}
    padding: 1.4em 1.7em;
    height: 3em;
    font-size: 1em;
    font-weight: 500;
    text-transform: capitalize;
    border-radius: 30px;

    .spanArrow {
      margin-left: 0.7em;
    }
    &:hover {
    }
  }
`;
