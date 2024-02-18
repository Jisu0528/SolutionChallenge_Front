import React, { useState } from 'react';
import styled from 'styled-components';
import Upload from '../assests/upload.png';

const AIImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleFileUpload = (files) => {
    const file = files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      alert('Please select an image file (jpg, png, etc.)');
    }
  };

  return(
    <Wrapper>
      <Label
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          handleFileUpload(e.dataTransfer.files);
        }}
      >
        {selectedImage ? (
          <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <ImgDiv>
              <Title>Your current appearance</Title>
              <SelectedImg src={selectedImage} alt="Selected Image" />                  
            </ImgDiv>
            <ImgDiv>
              <Title>The image of you abusing drugs</Title>
              <SelectedImg src={selectedImage} alt="Selected Image" />                  
            </ImgDiv>
          </div>

        ) : (
          <Container>
            <input 
              type="file" 
              accept=".jpg,.png,.pdf" 
              style={{ display: 'none' }} 
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <img src={Upload} alt='Upload the File' />
            <RSection>
              <div>
                <div style={{fontSize: '38px'}}>Drag and drop your face image</div>
                <div style={{fontSize: '28px', color: '#3D3D3D'}}>
                  or&nbsp;
                  <UploadBtn onClick={() => document.querySelector('input[type="file"]').click()}>
                    Select a file
                  </UploadBtn>
                  &nbsp;from your computer
                </div>            
              </div>
              <div style={{fontSize: '18px'}}>
                Convert the current facial image <br/>
                into a facial image showing the side effects of taking medication
              </div>
            </RSection>          
          </Container>
        )}
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89vh;
`;

const Label = styled.label`
  width: 1200px;
  height: 550px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed #3D3D3D;
  width: 1200px;
  height: 550px;
`;

const RSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  margin-left: 50px;
`;

const UploadBtn = styled.button`
  background-color: transparent;
  color: #4B4EFC;
  border: none;
  font-size: 28px;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SelectedImg = styled.img`
  width: 400px;
  height: 550px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
`;
export default AIImage;