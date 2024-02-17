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

export const DeleteButton = styled.button`
  border: none;
  border-radius: 10px;
  background: #000;
  padding: 5px 15px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #b22222;
  }
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
