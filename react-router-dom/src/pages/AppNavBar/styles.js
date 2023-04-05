import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 12px;
    }
  }
`;
