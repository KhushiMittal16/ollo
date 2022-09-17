import styled from "styled-components";

export const NavMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4%;
  font-family: Source Sans Pro;

  .logoOllo {
    /* padding-top: 1.1em; */
  }

  .linksNav {
    display: flex;
    justify-content: center;
  }

  .btnSearch {
    padding-top: 1.7em;
  }

  .otherLinks {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.1em;
    padding: 2.2em 1.5em;
  }

  .home {
    padding: 0px 1em;
    font-weight: 1.1em;
    color: #323232;

    &:hover {
      color: #02b5ff;
    }

    a {
      text-decoration: none;
      font-weight: 1.1em;
      color: #323232;

      &:hover {
        color: #02b5ff;
      }
    }
  }

  .search {
    font-size: larger;
    font-weight: bolder;
    padding: 0.9em 0.8em;
    color: #ffffff;
    background-color: rgb(2, 181, 255);
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavMainMidrange = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4%;
  font-family: Source Sans Pro;

  .btnSearch {
    padding-top: 1.7em;
  }
  /* .home {
    padding: 0px 1em;
    font-weight: 1.1em;
    color: #323232;

    &:hover {
      color: #02b5ff;
    } */
  /* } */

  .search {
    font-size: larger;
    font-weight: bolder;
    padding: 0.9em 0.8em;
    color: #ffffff;
    background-color: rgb(2, 181, 255);
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  .menuDiv {
    padding-top: 1.5em;
    padding-left: 1em;
  }

  .menuBtn {
    font-size: 2em;
    font-weight: bolder;
    /* margin: 0.5em 0.2em; */
    background-color: #ffffff;
    color: #02b5ff;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`; 

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 2.5em 1em;
  width: 100%;
  height: 100vh;

  .logo {
    margin: 3em 0px 7em 0px;
  }

  .searchInput {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0px 1em; */
    width: 90%;
    border: 1px solid #ccc;
    color: #555;
    border-radius: 5px;
  }
  input {
    width: 90%;
    padding: 1em;
    font-size: 1.2em;
    outline: none;
    border: none;
  }

  .inputBtn {
    background-color: #02b5ff;
    color: #fff;
    border: none;
    font-size: 1.5em;
    margin-right: -1.2em !important;
    height: 100%;
    padding: 0em 1.3em;
    font-weight: bolder;
    border-radius: 0px 5px 5px 0px;
  }

  .crossBtn {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .cross {
    font-size: 2.5em;
    color: #02b5ff;
    background-color: #fff;
    border: none;
  }
`;
