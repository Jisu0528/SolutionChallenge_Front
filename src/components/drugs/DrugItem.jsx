import styled from "styled-components";

const DrugItem = ({item}) => {
  return (
    <Wrapper>
      <Td>
        <Image src={item.title_image} alt={item.drug_nm} />
      </Td>
      <Td>
        {item.drug_nm}
      </Td>
      <Td>{item.drug_type}</Td>
      <Td>{item.medical_use}</Td>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  width: 1200px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid rgb(75, 78, 252, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Td = styled.td`
  width: 300px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 90px;
  height: 50px;
  border-radius: 5px;
  margin-left: 180px;
`;

export default DrugItem;