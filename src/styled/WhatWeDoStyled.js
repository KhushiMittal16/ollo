import styled from "styled-components";
export const WhatWeDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
    font-family: Source Sans Pro;
  align-items: center;

  .wwdHead {
    color: #00000099;
    text-transform: capitalize
    font-weight: 600;
  }

  .head {
    font-family: Roboto;
    font-weight: bold;
    font-size: 2.6em;
    color: #323232;
    font-variant: small-caps;
    text-transform: uppercase;
    margin: 8px 0px 14px;
  }

  .line {
    display: flex;
    justify-content: center;
    width: 4em;
    height: 1px;
    background-color: #02b5ff;
  }
  .desc {
    font-size: 1.1em;
    text-align: center;
    margin: 1.55em 0px 3.9em;
    color: #000000B3;
  }
`;
