import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #fff;
  padding: 15px;
`;
