import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품',
];

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0;
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
    &:hover {
      cursor: pointer;
    }
    &.checked {
      background-color: pink;
    }
  }
`;

const AllText = styled.ul`
  > li {
    list-style: none;
    float: left;
    margin: 1rem;
  }
`;
export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [filterDrop, setfilterDrop] = useState([]);
  const [selected, setSelected] = useState('');

  let selectedRef = useRef();

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  // TODO : input과 dropdown 상태 관리를 위한 handler가 있어야 합니다.
  const handleInputChange = (e) => {
    setHasText(true);
    setInputValue(e.target.value);

    if (e.target.value === '') {
      setfilterDrop([]);
    } else {
      let targetV = options.filter((v) => v.includes(e.target.value));
      setfilterDrop([...targetV]);
    }
  };

  const handleDropDownClick = (e) => {
    setInputValue(e.target.textContent);
  };

  const handleDeleteButtonClick = () => {
    setInputValue('');
  };

  const newText = (e) => {
    if (e.key === 'Enter' && options !== e.target.value) {
      setOptions([...options, e.target.value]);
      setInputValue('');
    }
  };

  const handleKeyUp = (e) => {
    // let index = filterDrop.indexOf(selected);
    // if (e.key === 'ArrowDown' && index < filterDrop.length - 1) {
    //   index++;
    //   setSelected(filterDrop[index]);
    // } else if (e.key === 'ArrowUp' && index > 0) {
    //   index--;
    //   setSelected(filterDrop[index]);
    // }
    // if (e.key === 'Enter') {
    //   setInputValue(filterDrop[index]);
    //   setfilterDrop([filterDrop[index]]);
    // }
    //!----
    let index = filterDrop.indexOf(inputValue);
    if (e.key === 'ArrowDown' && index < filterDrop.length - 1) {
      index++;
      setInputValue(filterDrop[index]);
    } else if (e.key === 'ArrowUp' && index > 0) {
      index--;
      setInputValue(filterDrop[index]);
    }

    if (e.key === 'Enter') {
      setInputValue(inputValue);
      setfilterDrop([inputValue]);
    }
  };

  return (
    <>
      <div className='autocomplete-wrapper'>
        <InputContainer>
          <input
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
            // onKeyUp={newText}
            onKeyUp={handleKeyUp}
            ref={selectedRef}
          ></input>
          <div className='delete-button' onClick={handleDeleteButtonClick}>
            &times;
          </div>
        </InputContainer>
        <DropDown
          selected={selected}
          options={options}
          inputValue={inputValue}
          filterDrop={filterDrop}
          handleComboBox={handleDropDownClick}
        />
      </div>
      <AllText>
        {options.map((text) => (
          <li>{text}</li>
        ))}
      </AllText>
    </>
  );
};

export const DropDown = ({
  selected,
  filterDrop,
  inputValue,
  handleComboBox,
}) => {
  return (
    <DropDownContainer>
      {inputValue === ''
        ? ''
        : filterDrop.map((text) => (
            <li
              onClick={(e) => handleComboBox(e)}
              className={
                inputValue === text || selected === text ? 'checked' : null
              }
            >
              {text}
            </li>
          ))}
    </DropDownContainer>
  );
};
