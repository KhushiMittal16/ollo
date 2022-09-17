import styled from "styled-components";

export const ButtonDivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  /* width: 100%; */
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02b5ff;
  color: #ffffff;
  ${"" /* width: 9em; */}
  padding: 1.4em 1.7em;
  height: 3em;
  font-size: 1em;
  font-weight: 500;
  text-transform: capitalize;
  border: none;
  border-radius: 30px;

  .btnArrow {
    margin-left: 0.7em;
  }
  &:hover {
    border: 1px solid #02b5ff;
    background: #ffffff;
    ${"" /* border-color: #02b5ff; */}
    color: #02b5ff;
    transition: all 0.5s ease-in-out;
  }
`;
