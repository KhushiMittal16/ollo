import styled from "styled-components";

// font-size: ${({ isTablet, isMobile }) =>isMobile ? "2.1em" : isTablet ? "3em" : "4em"};
export const Nav1Wrapper = styled.div`
  border-bottom: 1px solid #e3e2e2;
  padding: ${({ isMobile }) => (isMobile ? "1.2em 1em":"1.2em 3em")};
  color: rgba(0, 0, 0, 0.6);
  font-family: Source Sans Pro, sans-serif;
  display: flex;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  justify-content: space-between;
  align-items: center;

  .navContact {
    display: flex;
    flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  }

  .numStart {
    padding-right: ${({ isTablet }) => (isTablet ? "0px" : "1.1em")};
    margin-right: 0.9em;
    margin-bottom: ${({ isTablet }) => (isTablet ? "0.9em" : "0px")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: ${({ isTablet }) => (isTablet ? "0px" : "1px solid #e3e2e2")};
  }
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: #02b5ff;
      transition: all 0.4s ease-in-out;
    }
  }

  .email {
    margin-right: 0.9em;
    margin-bottom: ${({ isTablet }) => (isTablet ? "0.9em" : "0px")};

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .socialMedia {
    display: flex;
    margin-left: ${({ isMobile }) => (isMobile ? "0px":"1.9em")};
  }

  .socialMedia a {
    margin-left: 1.9em;
  }
`;
