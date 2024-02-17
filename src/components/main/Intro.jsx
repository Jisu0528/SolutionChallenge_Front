import SearchBar from "./SearchBar";
import Rate from "../../assests/rate.png";
import Trans from "../../assests/transform.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return(
    <Wrapper>
      <Title>Search for the drug you are looking for</Title>
      <SearchBar />
      <Text>
        This is to raise awareness of the risks of the drug. 
        Additional features include predicting mortality due to drug use, 
        AI facial deformation due to drug abuse, and cases of unintentional drug use.
      </Text>
      <Buttons>
        <Button onClick={() => navigate("/deathrate")}>
          <img src={Rate} alt="death rate" />Predicting Mortaility Rates
        </Button>
        <Button onClick={() => navigate("/transformimage")}>
          <img src={Trans} alt="conversing AI face" />Converting AI Face Images
        </Button>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 700px;
  margin: 200px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Text = styled.span`
  font-size: 22px;
  font-weight: 400;
  width: 1080px;
  text-align: center;
  line-height: 28px;
  margin-top: 260px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 500px;
  height: 40px;
  border: none;
  border-radius: 65px;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 500;
  background: linear-gradient(330deg, #1CA7EC, #4B4EFC, #4B4EFC, #7B7FF6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px
`;

export default Intro;