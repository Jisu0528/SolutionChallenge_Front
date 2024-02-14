import styled from "styled-components";

const DrugItem = ({item}) => {
  return (
    <Wrapper>
      <Td>
        <Image src={item.imageUrl} alt={item.name} />
      </Td>
      <Td>
        {item.name}
      </Td>
      <Td>{item.type}</Td>
      <Td>{item.medicalUse}</Td>
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
  justify-content: space-around;
`;

const Td = styled.td`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 90px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
`;

export default DrugItem;