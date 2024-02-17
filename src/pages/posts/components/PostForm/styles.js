import styled from "styled-components";

export const Form = styled.form`
  max-width: 250px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Field = styled.div``;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #e08d8d;
`;

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
