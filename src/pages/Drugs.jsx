import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import DrugList from '../components/drugs/DrugList';
import TabComponent from "../components/drugs/TabComponent";
import SearchBar from "../components/main/SearchBar";
import axios from "axios";

const Drugs = () => {
  const [selectedType, setSelectedType] = useState(1);
  const types = ["natural drug", "synthetic drug", "psychotropic drug", "hemp"];
  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    fetchDrugData(selectedType);
  }, [selectedType]);

  const handleTabClick = (type) => {
    // 선택된 타입의 숫자로 변환하여 설정합니다.
    switch(type) {
      case "natural drug":
        setSelectedType(1);
        break;
      case "synthetic drug":
        setSelectedType(2);
        break;
      case "psychotropic drug":
        setSelectedType(3);
        break;
      case "hemp":
        setSelectedType(4);
        break;
      default:
        setSelectedType(1); // 기본값은 "natural drug"
    }
  }

  const fetchDrugData = async (type) => {
    try {
      const response = await axios.get(`/safeguardian/drug/${type}`);
      if (response.status === 200) {
        setDrugData(response.data);
      }
    } catch (error) {
      console.error('error: ', error);
    }
  }

  return(
    <Wrapper>
      <TopContainer>
        <TabComponent
          types={types}
          onTabClick={handleTabClick}
          selectedType={types[selectedType - 1]}
        />  
        <SearchBar
          containerWidth="420px"
          containerHeight="45px"
          imgWidth="40px"
          imgHeight="35px"
          inputFontSize="14px"
        />      
      </TopContainer>
      {selectedType && <DrugList drugData={drugData}/>}
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
  justify-content: space-between;
  align-items: center;
`;

export default Drugs;