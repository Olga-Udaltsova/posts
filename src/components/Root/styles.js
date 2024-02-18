import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.div`
  max-width: 600px;
  margin: 15px auto 0 auto;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MenuItem = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #000;
  &.active {
    color: #b22222;
  }

  &:hover {
    text-decoration: underline;
  }
`;
