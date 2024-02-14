import styled from "styled-components";
import DrugItem from "./DrugItem";
import Prev from "../../assests/prev.png";
import Next from "../../assests/next.png";
import pagination from "../../shared/Pagination";

export default function DrugList() {
  // 임시 마약 데이터
  const drugData = [
    {id:0, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:1, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:2, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:3, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:4, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:5, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:6, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
    {id:7, name: "poppy", imageUrl:require('../../assests/poppy.png'), type: "Opium", medicalUse: "microanesthesia"},
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
    drugData, // 데이터를 frontData로 변경
    itemsPerPage
  );

  return (
    <>
      <Wrapper>
        <div>
          <Thead>
            <Tr>
              <Th></Th>
              <th>Name</th>
              <th>Type</th>
              <th>medical use</th>          
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((drugs, index) => (
              <DrugItem key={drugs.id} index={index} item={drugs} />
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
`;

const Thead = styled.thead`

`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1200px;
  height: 80px;
  font-size: 26px;
  font-weight: 600;
`;

const Th = styled.th`
  width: 100px;
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