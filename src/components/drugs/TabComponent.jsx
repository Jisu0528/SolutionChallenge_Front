import React from 'react';
import styled from 'styled-components';

const TabComponent = ({ types, onTabClick, selectedType }) => {
  return (
    <Tabs>
      {types.map((type, index) => (
        <Tab 
          key={index} 
          onClick={() => onTabClick(type)}
          isSelected={type === selectedType}
        >
          {type}
          {type === selectedType && <BlueLine />}
        </Tab>
      ))}
    </Tabs>
  );
};

const Tabs = styled.div`
  display: flex;
  gap: 7px;
`;

const Tab = styled.button`
  background-color: ${({ isSelected }) => isSelected ? '#4B4EFC' : '#FFFFFF'};
  border-radius: 30px 30px 0 0;
  color: ${({ isSelected }) => isSelected ? '#FFFFFF' : '#4B4EFC'};;
  font-size: 22px;
  font-weight: 600;
  width: 185px;
  height: 65px;
  cursor: pointer;
  border: none;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.1);
  position: relative;

  &.active::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #5263ff;
    border-radius: 50%;
  }
`;

const BlueLine = styled.span`
  position: absolute;
  left: 8px;
  bottom: 0;
  width: 5px;
  height: 50px;
  background-color: #FFFFFF;
`;

export default TabComponent;