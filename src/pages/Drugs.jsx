import React, { useState } from "react";
import styled from 'styled-components';
import DrugList from '../components/drugs/DrugList';
import TabComponent from "../components/drugs/TabComponent";

const Drugs = () => {
  const [selectedType, setSelectedType] = useState(null);
  const types = ["natural drug", "synthetic drug", "psychotropic drug", "hemp"];
  
  const handleTabClick = (type) => {
    setSelectedType(type);
  }

  return(
    <Wrapper>
      <TopContainer>
        <TabComponent
          types={types}
          onTabClick={handleTabClick}
          selectedType={selectedType}
        />        
      </TopContainer>
      <DrugList selectedType={selectedType} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(75, 78, 252, 0.05);
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopContainer = styled.div`
  width: 1400px;
  display: flex;
  justify-content: flex-start;
`

export default Drugs;