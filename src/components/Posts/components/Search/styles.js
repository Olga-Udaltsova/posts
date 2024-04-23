import styled from "styled-components";

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
  button {
    width: 100px;
    margin: 15px;
    background: #fff;
    border: 1px solid #000;
    cursor: pointer;
    &:hover {
      background: #e08d8d;
    }
  }
`;
