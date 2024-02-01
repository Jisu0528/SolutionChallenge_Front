import React, { useState } from "react";
import styled from "styled-components";
import Search from "../../assests/search.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const handleSearch = () => {
    navigate(`/drugs/${search}`);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Button type="button" id="search_btn" onClick={handleSearch}>
        <img src={Search} alt="Search" />
      </Button>
      <Input 
        placeholder="Enter drug name, conditions, etc" 
        name="search"
        type="text"
        value={search}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px auto 260px;
  padding: 0 30px;
  box-sizing: border-box;
  width: 1080px;
  height: 60px;
  background-color: transparent;
  border: 2px solid #4B4EFC;
  border-radius: 65px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`;

export default SearchBar;