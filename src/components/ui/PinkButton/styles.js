import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: #e08d8d;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #ab4141;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
