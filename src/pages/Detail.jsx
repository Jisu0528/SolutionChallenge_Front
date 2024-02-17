import styled from "styled-components";
import ImageBox from "../components/detail/ImageBox";

const Detail = () => {

  return(
    <Wrapper>
      <Container>
        <ImageBox />
        <Details>
          <div>
            <Name>Cocaine</Name>
            <Line />            
          </div>
          <Table>
            <tr>
              <Title>Type</Title>
              <Td>coca, natural drug</Td>              
            </tr>
            <tr>
              <Title>Feature</Title>
              <Td>
                <div>◦ Extracted from coca leaves</div>
                <div>◦ Fluffy white crystalline powder</div>
                <div>◦ Nasal inhalation, injection, oral administration</div>
              </Td>              
            </tr>
            <tr>
              <Title>Side Effects</Title>
              <Td>
                <div>◦Extracted from</div>
                <div>◦ Fluffy white</div>
              </Td>              
            </tr>
          </Table>
        </Details>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(75, 78, 252, 0.05);
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: #FFFFFF;
  width: 1400px;
  height: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  height: 440px;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding: 2px 0 10px;
`;

const Line = styled.div`
  width: 880px;
  border: 1px solid #3D3D3D;
  margin-bottom: 70px;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
`;

const Title = styled.th`
  font-size: 24px;
  font-weight: 600;
  width: 150px;
  text-align: left;
  vertical-align: top;
`;

const Td = styled.td`
  font-size: 18px;
  font-weight: 500;
  padding-left: 60px;
  line-height: 35px;
`;

export default Detail;