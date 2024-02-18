import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: 1px solid #e08d8d;
`;

export const Button = styled.button`
  border: none;
  background: #e08d8d;
  color: #fff;
  padding: 10px 0;
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
