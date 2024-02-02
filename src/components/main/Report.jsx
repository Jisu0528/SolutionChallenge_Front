import styled from 'styled-components';
import Chart1 from './Chart1';
import Chart2 from './Chart2';

const Report = () => {
  return(
    <Wrapper>
      <Title>Drug Gaurd Report</Title>
      <Charts>
        <Chart1 />
        <MiniChart>
          <Chart2 />
          <Chart2 />
          <Chart2 />
        </MiniChart>
      </Charts>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(75, 78, 252, 0.05);
  height: 960px;
`;

const Title = styled.div`
 font-size: 42px;
 font-weight: 600;
`;

const Charts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MiniChart = styled.div`
  display: flex;
  gap: 25px;
`;

export default Report;