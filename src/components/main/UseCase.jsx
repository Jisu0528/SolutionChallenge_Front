import CaseList from "./CaseSlide";
import styled from "styled-components";

export default function UseCase() {
  // 임시 데이터
  const caseData = [
    { id:0, imageUrl:require('../../assests/drugImage.png'), title: "cases of unintentional drug abuse title 1"},
    { id:1, imageUrl:require('../../assests/drugImage.png'), title: "cases of unintentional drug abuse title 2"},
    { id:2, imageUrl:require('../../assests/drugImage.png'), title: "cases of unintentional drug abuse title 3"},
    { id:3, imageUrl:require('../../assests/drugImage.png'), title: "cases of unintentional drug abuse title 4"},
    { id:4, imageUrl:require('../../assests/drugImage.png'), title: "cases of unintentional drug abuse title 5"},
  ];

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