import styled from "styled-components";
export const OffersWrapper = styled.div`
  background-color: #02b5ff;
  color: #fff;
  margin: 6.3em 0px;
  padding: 3.1em 1em 3.8em;
  text-align: center;

  .title {
    font-size: 1.4em;
    font-weight: 500;
    font: Roboto;
    text-transform: uppercase;
  }

  .desc {
    margin: 1.25em 0px 2.5em;
    font: Source Sans Pro;
  }

  .letsGo {
    background-color: #ffffff;
    color: #02b5ff;
    width: 9em;
    height: 3em;
    font-size: 1em;
    font-weight: 600;
    text-transform: capitalize;
    border: none;
    vertical-align: center;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
      .btnArrow {
        transition: all 0.3s ease-in-out;
        ${"" /* backface-visibility: hidden; */}
        ${"" /* transform: translateZ(0); */}
      }
    }
  }
`;
