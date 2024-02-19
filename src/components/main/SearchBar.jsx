import React, { useState } from "react";
import styled from "styled-components";
import Search from "../../assests/search.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SearchBar = ({ containerWidth, containerHeight, imgWidth, imgHeight, inputFontSize }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://34.64.87.200:8000/safeguardian/search/?search=${search}`);
      const data = response.data;
      console.log(response);
      
      if (data) {
        navigate(`/drugs/${data[0].drug_id}`);
      } else {
        // 일치하는 drug_nm이 없으면 경고
        alert("일치하는 결과를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container width={containerWidth} height={containerHeight}>
      <Button type="button" id="search_btn" onClick={handleSearch}>
        <Img src={Search} alt="Search" width={imgWidth} height={imgHeight} />
      </Button>
      <Input 
        placeholder="Enter drug name, conditions, etc" 
        name="search"
        type="text"
        value={search}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        fontSize={inputFontSize}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0 30px;
  box-sizing: border-box;
  width: ${({ width }) => width || "1080px"};
  height: ${({ height }) => height || "60px"};
  background-color: transparent;
  border: 2px solid #4B4EFC;
  border-radius: 65px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Img = styled.img`
  width: ${({ width }) => width || "auto"};
  height: ${({height}) => height || "auto"};
`;

const Input = styled.input`
  width: -webkit-fill-available;
  border: none;
  outline: none;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
`;

export default SearchBar;