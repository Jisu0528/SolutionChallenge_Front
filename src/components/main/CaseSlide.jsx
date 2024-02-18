import React, { useState } from "react";
import CaseItem from "./CaseItem";
import styled from "styled-components";
import RightBtn from "../../assests/right.png";
import LeftBtn from "../../assests/left.png";

export default function CaseList({items}) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage= 4;  // 한 번에 아이템 4개씩 보여짐
  const totalItems = items.length;

  // 전체 아이템을 페이지 단위로 나누기
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (startIndex + itemsPerPage) % totalItems;
  const currentItems = startIndex < endIndex
  ? items.slice(startIndex, endIndex)
  : [...items.slice(startIndex), ...items.slice(0, endIndex)];

  // 이전 페이지로 이동
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(items.length / itemsPerPage));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(items.length / itemsPerPage)) % Math.ceil(items.length / itemsPerPage));
  };

  return (
    <Wrapper>
      <Button onClick={goToPrevPage}>
        <img src={LeftBtn} alt="left" />
      </Button>
      <Slide>
        {currentItems.map((item, index) => (
          <a 
            key={index} 
            href={item.usage_ctnt} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none", color: "#3D3D3D"}}
          >
            <CaseItem key={index} item={item} />
          </a>
        ))}
      </Slide>
      <Button onClick={goToNextPage}>
        <img src={RightBtn} alt="right" />
      </Button>
    </Wrapper>
  );
};  

const Wrapper = styled.div`
  display: flex;
  margin: 0 120px;
  justify-content: space-between;
`

const Slide = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  overflow: hidden;
  padding: 10px 5px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;