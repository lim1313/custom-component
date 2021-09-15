import styled, { keyframes } from 'styled-components';

const floatAnimation = (one, two) => keyframes`
0% {bottom : -15%; transform: translatex(0)}
50% {transform: translateX(${one}px)}
100% {bottom : 97%; transform: translateX(${two}px)}
`;

const EmojiBubble = styled.span`
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  bottom: 0;
  left: ${({ left }) => (left ? left : 10)}%;
  font-size: ${({ size }) => (size ? size : 1)}rem;
  animation: ${({ one, two }) => floatAnimation(one, two)}
    ${({ size }) => (size < 3 ? 5 : 7)}s ease-in forwards;
`;

export default EmojiBubble;
