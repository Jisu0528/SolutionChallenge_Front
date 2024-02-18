import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrugItem from "./DrugItem";
import Prev from "../../assests/prev.png";
import Next from "../../assests/next.png";

export default function DrugList({ drugData }) {
  return (
    <>
      <Wrapper>
        <div>
          <thead>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>medical use</Th>          
            </Tr>
          </thead>
          <tbody>
            {drugData.map((drugs, index) => (
              <Link to={`/drugs/${drugs.drug_nm}`} key={index} style={{ textDecoration: "none", color: "#3D3D3D"}}>
                <DrugItem key={drugs.drug_id} index={index} item={drugs} />                
              </Link>
            ))}        
          </tbody>        
        </div>

        <PaginationContainer> 
          <PaginationButton>
            <img src={Prev} alt="left" />
          </PaginationButton>
            <PageButton>1</PageButton>
          <PaginationButton>
            <img src={Next} alt="right" />
          </PaginationButton>
        </PaginationContainer>
      </Wrapper>    
    </>

  );
};

const Wrapper = styled.table`
  border-radius: 0 5px 5px 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: #FFFFFF;
  width: 1400px;
  height: 650px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 80px;
  font-size: 26px;
`;

const Th = styled.th`
  width: 300px;
  display: flex;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 40px;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin: 0 5px;
`;

const PageButton = styled.button`
  border: none;
  margin: 10px;
  background-color: transparent;
  color: #5263ff;
  font-size: 15px;
`;