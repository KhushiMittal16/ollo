import styled from "styled-components";
export const CardWrapper = styled.div`
  margin: ${({ isMobile }) =>
    isMobile ? "3.8em 2em" : "3.8em 3em"};
  ${"" /* width: 87.6%; */}
  /* display: flex; */

  display: grid;
  grid-template-columns: ${({ isTablet }) =>
    isTablet ? "repeat(1, 1fr)" : "repeat(3, 1fr)"};
  align-items: center;
  justify-content: center;

  .mapCard {
    border: 1px solid #e9e4e4;
    min-width: 28%;
    margin: 0px 15px 30px;
    padding: 45px 30px;
    text-align: center;

    &:hover {
      border-color: #02b5ff;
      transition: all 0.4s ease-in-out;
    }
  }

  .titleCard {
    font-size: 1.4em;
    color: #393939;
    font-family: Roboto;
    ${"" /* text-align: center; */}
  }

  .cardDesc {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
    font-family: Roboto;
    font-family: Source Sans Pro;
    padding: 1.3em 0px 0px 0px;
  }

  .btnDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
