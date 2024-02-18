import styled from "styled-components";

export const Image = styled.img`
  max-width: 200px;
  float: left;
  margin-right: 15px;
`;

export const Text = styled.div`
  font-size: 15px;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  margin: 15px 0 0 0;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalText = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
