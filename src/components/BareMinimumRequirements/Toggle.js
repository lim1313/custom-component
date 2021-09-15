import { useState } from 'react';
import styled from 'styled-components';
import EmojiBoard from './toggleBubble/emojiBoard';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ToggleContainer = styled.div`
  position: absolute;
  cursor: pointer;

  > .toggle-container {
    position: relative;
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    overflow: hidden;
    transition: all 0.5s;

    &.toggle-checked {
      transition: transform 0.5s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: transform 0.5s;

    &.toggle-checked {
      transform: translateX(26px);
      background-color: #e0d7ff;
    }
  }
`;

const SlideDiv = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(${({ isOn }) => (isOn === 'isOn' ? '0px' : '-50px')});
  height: 24px;
  width: 50px;
  border-radius: 30px;
  background-color: #66a6ff;
  transition: transform 0.5s;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <Wrapper>
        {isOn ? <EmojiBoard /> : null}
        <ToggleContainer onClick={toggleHandler}>
          <div
            className={
              isOn ? 'toggle-container toggle-checked' : 'toggle-container'
            }
          >
            <SlideDiv
              className='slideDiv'
              isOn={isOn ? 'isOn' : null}
            ></SlideDiv>
          </div>
          <div
            className={isOn ? 'toggle-circle toggle-checked' : 'toggle-circle'}
          />
        </ToggleContainer>
      </Wrapper>
    </>
  );
};
