import styled from "styled-components";
import { Link } from "react-router-dom";
import DrugItem from "./DrugItem";
import Prev from "../../assests/prev.png";
import Next from "../../assests/next.png";
import pagination from "../../shared/Pagination";

export default function DrugList({ selectedType }) {
  // 임시 마약 데이터
  const drugData = [
    {id:0, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "natural drug", medicalUse: "microanesthesia"},
    {id:1, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "natural drug", medicalUse: "microanesthesia"},
    {id:2, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "synthetic drug", medicalUse: "microanesthesia"},
    {id:3, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "synthetic drug", medicalUse: "microanesthesia"},
    {id:4, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "psychotropic drug", medicalUse: "microanesthesia"},
    {id:5, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "psychotropic drug", medicalUse: "microanesthesia"},
    {id:6, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "hemp", medicalUse: "microanesthesia"},
    {id:7, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "hemp", medicalUse: "microanesthesia"},
  ];

  const itemsPerPage = 7; // 페이지 당 보여줄 아이템 수
  const {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = pagination(
    selectedType ? drugData.filter(drug => drug.type === selectedType) : drugData,
    itemsPerPage
  );

  return (
    <>
      <Wrapper>
        <div>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>medical use</Th>          
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((drugs, index) => (
              <Link to={`/drugs/${drugs.name}`} key={index} style={{ textDecoration: "none", color: "#3D3D3D"}}>
                <DrugItem key={drugs.id} index={index} item={drugs} />                
              </Link>
            ))}        
          </Tbody>        
        </div>


        <PaginationContainer> 
              <PaginationButton onClick={goToPrevPage}>
                <img src={Prev} alt="left" />
              </PaginationButton>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PageButton
                  key={index}
                  onClick={() => paginate(index + 1)}
                  isSelected={index + 1 === currentPage}
                >
                  {index + 1}
                </PageButton>
              ))}
              <PaginationButton onClick={goToNextPage}>
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

const Thead = styled.thead`

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

const Tbody = styled.tbody`

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
  color: ${(props) => (props.isSelected ? "#5263ff" : "#838383")};
  font-size: 15px;
`;