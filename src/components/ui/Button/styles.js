import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: ${(props) => (props.$black ? "#000" : "#e08d8d")};
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$black ? "#b22222" : "#ab4141")};
  }

  &:disabled {
    opacity: ${(props) => (props.$black ? "1" : "0.5")};
    cursor: ${(props) => (props.$black ? "cursor" : "default")};
  }
`;
