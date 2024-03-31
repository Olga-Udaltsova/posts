import styled from "styled-components";

export const Button = styled.button`
  background: #fff;
  padding: 5px 10px;
  cursor: pointer;

  &.active {
    border: 1px solid #e08d8d;
    color: #e08d8d;
  }

  &.noActive {
    border: 1px solid #000;
    color: #000;
  }
`;
