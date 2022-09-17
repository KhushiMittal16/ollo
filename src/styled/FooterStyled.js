import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #131212;
  color: #eceff2;
  font: Source Sans Pro;
  font-weight: 400;
  padding-top: 5.3em;
`;

export const FooterAllWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  padding: ${({ isTablet }) => (isTablet ? "0px 0.9em" : "0px")};
  align-items: top;
  justify-content: space-evenly;
  /* width: 100%; */
  margin-bottom: 4.5em;

  .contact{
    margin-bottom: 2.7em;
  }

  .head {
    color: #ffffff;
    font: Roboto;
    font-size: 1.15em;
    margin-bottom: 3em;
  }

  .subsHead {
    color: #ffffff;
    font: Roboto;
    font-size: 1.15em;
    margin: 1.75em 0px 1.1em;
  }

  .contactDetails {
    margin-top: 2.4em;
  }

  .contactDet {
    padding-left: 2em;
    margin-top: -4px;
  }

  .contacts {
    display: flex;
    align-items: top;
    padding-bottom: 0.65em;
  }

  .aboutLink {
    margin-bottom: 0.65em;
  }

  .partnerLink {
    margin-bottom: 0.65em;
  }
  a {
    text-decoration: none;
    color: #eceff2;

    &:hover {
      color: #02b5ff;
    }
  }

  .socialIcons {
    margin-right: 1.9em;
  }

  .subsAll {
    margin: 1em 0px 1em;
    background-color: #ffffff;
    height: 3.2em;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 4px;
  }
  .subsAll input {
    outline: none;
    border: none;
    padding-left: 0.95em;
    height: 3.1em;
    width: 80%;
  }

  .subsAll button {
    outline: none;
    border: none;
    height: 3.1em;
    padding: 0.3em 0.8em;
    font-weight: 500;
    color: #ffffff;
    background-color: #02b5ff;
    transition: all 0.4s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #131212;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  color: #969696;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 40px 0px;
  a {
    text-decoration: none;
    color: #02b5ff;

    &:hover {
      color: #23527c;
    }
  }
`;
