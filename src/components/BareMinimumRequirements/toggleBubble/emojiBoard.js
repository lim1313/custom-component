import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmojiBubble from './emojiBubble';

const EmojiBoard = () => {
  const [emojiQueue, setEmojiQueue] = useState([]);
  const emojis = [
    '😆',
    '😎',
    '🌈',
    '👻',
    '💛',
    '💙',
    '💚',
    '🧡',
    '😇',
    '🤣',
    '😉',
    '😊',
    '🙂',
    '🙃',
  ];

  const repeat = () => {
    let value = emojis[Math.floor(Math.random() * (emojis.length - 1))];

    handleEmojiClick(value);
  };

  useEffect(() => {
    repeat();
  }, []);

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPosOrNeg = (max, min) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    return randomNumber;
  };

  const handleEmojiClick = (value) => {
    setEmojiQueue([
      ...emojiQueue,
      {
        value,
        size: randomNumber(2.5, 2),
        left: randomNumber(95, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50),
        id: Date.now(),
      },
    ]);
  };

  return (
    <>
      {emojiQueue.map(({ id, value, size, left, one, two }) => (
        <EmojiBubble
          onClick={repeat}
          key={id}
          value={value}
          size={size}
          left={left}
          one={one}
          two={two}
        >
          {value}
        </EmojiBubble>
      ))}
    </>
  );
};

export default EmojiBoard;
