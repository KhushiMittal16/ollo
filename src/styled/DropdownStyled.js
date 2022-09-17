import styled from "styled-components";
export const DropdownWrapper = styled.div`
  margin: 2px 2em;
  font-family: Source Sans Pro;

  .home {
    border-top: 1px solid #f0f0f0;
    padding: 0.6em 5px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      color: #323232;
    }
    
    &:hover a{
      color: #02b5ff;
    }
  }
`;
