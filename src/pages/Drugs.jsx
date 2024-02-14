import styled from 'styled-components';
import DrugList from '../components/drugs/DrugList';

const Drugs = () => {
  return(
    <Wrapper>
      <DrugList />
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

export default Drugs;