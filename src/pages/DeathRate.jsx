import styled from 'styled-components';
import React, { useState } from 'react';
import SelectBox from '../components/death/SelectBox';
import CheckBox from '../components/death/CheckBox';
import axios from 'axios';
const { GoogleAuth } = require('google-auth-library');

const DeathRate = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [race, setRace] = useState('');
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const SexOption = [
    { value: "Sex_Unknown", name: "Unknown" },
    { value: "Sex_Female", name: "Famale" },
    { value: "Sex_Male", name: "Male" },
  ];

  const RaceOption = [
    { value: "Race_Unknown", name: "Unknown" },
    { value: "Race_Asian_Indian", name: "Asian Indian" },
    { value: "Race_Asian_Other", name: "Asian Other" },
    { value: "Race_Black", name: "Black" },
    { value: "Race_Chinese", name: "Chinese" },
    { value: "Race_Hawaiian", name: "Hawaiian" },
    { value: "Race_Hispanic_Black", name: "Hispanic_Black" },
    { value: "Race_Hispanic_White", name: "Hispanic_White" },
    { value: "Race_Native_American_Other", name: "Native American Other" },
    { value: "Race_Other", name: "Other" },
    { value: "Race_White", name: "White" },
  ];

  const DrugOption = [
    { value: "Amphet", name: "Amphet" },
    { value: "AnyOpioid", name: "AnyOpioid" },
    { value: "Benzodiazepine", name: "Benzodiazepine" },
    { value: "Cocaine", name: "Cocaine" },
    { value: "Ethanol", name: "Ethanol" },
    { value: "Fentanyl", name: "Fentanyl" },
    { value: "Fentanyl_Analogue", name: "Fentanyl_Analogue" },
    { value: "Heroin", name: "Heroin" },
    { value: "Hydrocodone", name: "Hydrocodone" },
    { value: "Methadone", name: "Methadone" },
    { value: "Oxycodone", name: "Oxycodone" },
    { value: "Oxymorphone", name: "Oxymorphone" },
  ];

  const handleSexChange = (selectedValue) => {
    setSex(selectedValue);
  };

  const handleRaceChange = (selectedValue) => {
    setRace(selectedValue);
  };

  const handleSelectedDrugsChange = (selectedOptions) => {
    setSelectedDrugs(selectedOptions);
  };

  const handleSaveButtonClick = async () => {
    const requestBody = {
      "Age": age,
      "Sex_Female": sex === "Sex_Female" ? "1" : "0",
      "Sex_Male": sex === "Sex_Male" ? "1" : "0",
      "Sex_Unknown": sex === "Sex_Unknown" ? "1" : "0",
      "Race_Asian_Indian": race === "Race_Asian_Indian" ? "1" : "0",
      "Race_Asian_Other": race === "Race_Asian_Other" ? "1" : "0",
      "Race_Black": race === "Race_Black" ? "1" : "0",
      "Race_Chinese": race === "Race_Chinese" ? "1" : "0",
      "Race_Hawaiian": race === "Race_Hawaiian" ? "1" : "0",
      "Race_Hispanic_Black": race === "Race_Hispanic_Black" ? "1" : "0",
      "Race_Hispanic_White": race === "Race_Hispanic_White" ? "1" : "0",
      "Race_Native_American_Other": race === "Race_Native_American_Other" ? "1" : "0",
      "Race_Other": race === "Race_Other" ? "1" : "0",
      "Race_Unknown": race === "Race_Unknown" ? "1" : "0",
      "Race_White": race === "Race_White" ? "1" : "0",
      "Tramad": "0",
    };

    DrugOption.forEach(drug => {
      const isSelected = selectedDrugs.includes(drug.value);
      requestBody[drug.value] = isSelected ? "1" : "0";
    });

    try {
      const response = await axios.post('/api/predict', requestBody);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    

    // const instance = axios.create({
    //   baseURL: 'https://asia-northeast3-aiplatform.googleapis.com/v1/projects/50762632220/locations/asia-northeast3/endpoints/5218607640866717696:predict',
    //   headers: {
    //     'Authorization': 'Bearer your_token_here' // 여기에 실제 토큰 값을 넣어야 합니다.
    //   }
    // });

    // // POST 요청 보내기
    // instance.post('/', requestBody)
    //   .then(response => {
    //     // 요청 성공 시 처리
    //     console.log('Response:', response.data);
    //   })
    //   .catch(error => {
    //     // 요청 실패 시 처리
    //     console.error('Error:', error);
    //   });
  };

  return(
    <Wrapper>
      <div>
        <Container>
          <Title>Predict mortality rate</Title>
          <Button onClick={handleSaveButtonClick}>Save</Button>
        </Container>   
        <Text>The mortality rate when taking the drug can be predicted based on the conditions below</Text>     
      </div>
      <Container>
        <div>
          <Name>Age</Name>    
          <Input 
            autocomplete="off" 
            type="int"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />      
        </div>
        <div>
          <Name>Sex</Name>  
          <SelectBox 
            options={SexOption} 
            value={sex} 
            onChange={handleSexChange}
          />        
        </div>
        <div>
          <Name>Race</Name> 
          <SelectBox
            options={RaceOption}
            value={race} 
            onChange={handleRaceChange}
          />          
        </div>
        <div>
          <Name>Drug</Name> 
          <CheckBox 
            options={DrugOption}
            selectedOptions={selectedDrugs} 
            onChange={handleSelectedDrugsChange}
          />       
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 89vh;
  gap: 120px;
  padding-bottom: 270px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1400px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
`;

const Button = styled.button`
  background-color: #4B4EFC;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 500;
  border: none;
  width: 100px;
  height: 44px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 24px;
  color: #3D3D3D;
  margin-top: 15px;
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #A8A8A8;
  font-size: 24px;
  color: #3D3D3D;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;

  &:focus {
    border-color: #4B4EFC;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default DeathRate;