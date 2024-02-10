import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const LinkStyle = css`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #b22222;
    text-decoration: underline;
  }
`;

export const SimpleLink = styled(Link)`
  ${LinkStyle}
`;

export const NavigationLink = styled(NavLink)`
  ${LinkStyle}
`;
