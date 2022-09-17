import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin-top: 4em;
`;

export const ProjectsCardWrapper = styled.div`
  ${"" /* margin: 3.8em 5em 0px; */}
  ${"" /* width: 100vw; */}
  display: flex;
  align-items: center;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  ${"" /* justify-content: space-between; */}
  margin: 0px;

  .mapCard {
    border: 1px solid #e9e4e4;
    width: ${({ isTablet }) => (isTablet ? "70%" : "30%")};
    margin: ${({ isTablet }) => (isTablet ? "1em" : "0px 15px")};
    text-align: center;
    .imgCard {
      overflow: hidden;
    }
    &:hover {
      background-color: #02b5ff;
      transition: all 0.9s ease-in-out;
      img {
        transform: scale(1.1);
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .titleCard {
    font-size: 1.4em;
    color: #393939;
    font: Roboto;
    ${"" /* text-align: center; */}
  }

  .projDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1em 3em;
  }

  .arrow {
    padding: 0.8em 1em;
    color: #ffffff;
    font-weight: bolder;
    border-radius: 50%;
    background-color: #02b5ff;
    border: 1px solid #fff;
  }

  .descProj {
    font-size: 1.4em;
    ${"" /* margin-top: 13px; */}
    font-family: Roboto;
    color: #393939;
    font-weight: 500;
  }
`;
