import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  & div {
    margin: 1rem;
  }

  .closeBtn:hover {
    cursor: pointer;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
    console.log('target', e.target, 'currnetTarget', e.currentTarget, e);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>Open Modal</ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div className='closeBtn' onClick={openModalHandler}>
                CLOSE
              </div>
              <div>HELLO EVERYONE</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
