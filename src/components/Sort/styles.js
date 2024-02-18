import styled from "styled-components";

export const Sort = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  font-size: 15px;
  &:hover,
  &:focus {
    border: 1px solid #e08d8d;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 10px;
  input {
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    &:hover,
    &:focus {
      outline: 1px solid #e08d8d;
    }
  }
`;
