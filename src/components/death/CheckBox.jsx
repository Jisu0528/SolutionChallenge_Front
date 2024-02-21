import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBox = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      props.onChange([...props.selectedOptions, option]);
    } else {
      props.onChange(props.selectedOptions.filter(item => item !== option));
    }
  };

  //console.log(selectedOptions);

  return (
  <>
    <OptionsContainer>
      <CheckboxContainer isVisible={isVisible}>
        <CheckboxScrollArea>
          {props.options.map((option) => (
            <Label key={option.value}>
              <OptionCheckbox 
                type="checkbox" 
                value={option.value} 
                onChange={handleOptionChange} 
              />
              {option.name}
            </Label>
          ))}
        </CheckboxScrollArea>
      </CheckboxContainer>
      <Button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </Button>
    </OptionsContainer>
  </>    
  );
};

const OptionsContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 250px;
  height: 60px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #A8A8A8;
  color: #3D3D3D;
  font-weight: 500;
  font-size: 24px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #4B4EFC;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

const CheckboxContainer = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  max-height: 300px; 
  width: 246px;
  overflow: scroll; 
  -ms-overflow-style: none;
  top: 65px;
  font-size: 22px;
  color: #3D3D3D;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border: 2px solid #4B4EFC;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CheckboxScrollArea = styled.div`
  height: 100%;
`;

const OptionCheckbox = styled.input`
  margin-right: 20px;
  width: 25px;
  height: 25px;
  appearance: none;
  background-color: #FFFFFF; 
  border: 1px solid #A8A8A8; 
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  position: relative;
  &:checked {
    background-color: #4B4EFC;
    border: none;
  }
  &:checked::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    top: 7%;
    left: 25%;
  }
`;

const Label = styled.label`
  cursor: pointer;
  padding: 10px 20px;
  display: inline-flex;
  white-space: nowrap;
  text-align:center;
  overflow-x: auto;
`;

export default CheckBox;