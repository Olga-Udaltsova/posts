import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #dc143c;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
