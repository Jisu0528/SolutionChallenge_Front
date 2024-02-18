import React, { useState, useEffect } from "react";
import CaseList from "./CaseSlide";
import styled from "styled-components";
import axios from "axios";

export default function UseCase() {
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const response = await axios.get('/safeguardian');
        if (response.status === 200) {
          setCaseData(response.data);
        }
      } catch (error) {
        console.error('error: ', error);
      }
    }
    fetchCaseData();
  }, []);

  return (
    <Wrapper>
      <Title>Cases of unintentional drug abuse</Title>
      <SlideContainer>
        <CaseList items={caseData} />
      </SlideContainer>
    </Wrapper>
  ); 
};

const Wrapper = styled.div`
  height: 960px;
  background-color: rgb(75, 78, 252, 0.05);
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  padding: 50px 120px 0;
`;

const SlideContainer = styled.div`
  display: flex;
  height: 810px;
  flex-direction: column;
  justify-content: center;
`;