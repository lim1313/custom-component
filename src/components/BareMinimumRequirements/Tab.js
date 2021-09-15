import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  & li {
    flex: 1;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color: pink
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu currentTab={currentTab}>
          {menuArr.map((tab, i) => (
            <li
              className={`submenu${
                tab.name === menuArr[currentTab].name ? ' focused' : ''
              }`}
              onClick={() => {
                selectMenuHandler(i);
              }}
            >
              {tab.name}
            </li>
          ))}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
