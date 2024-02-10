import styled from "styled-components";
import { Link } from "react-router-dom";

export const SimpleLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #b22222;
    text-decoration: underline;
  }
`;
