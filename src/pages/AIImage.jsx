import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Upload from '../assests/upload.png';

function AIImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleDrop = async (e) => {
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    onImageUpload(image);
  };

  const onImageUpload = async (image) => {
    setSelectedImage(URL.createObjectURL(image));

    const formData = new FormData();
    formData.append('image', image);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('/main/generate/', formData, config);
      const { data } = response;
      setResultImage(`data:image/jpeg;base64,${data.image}`);
    } catch (error) {
      console.error('Error during image upload', error);
    }
  };

  const handleFileSelect = (e) => {
    const image = e.target.files[0];
    onImageUpload(image);
  };

  const downloadResultImage = () => {
    if (resultImage) {
      const link = document.createElement('a');
      link.href = resultImage;
      link.download = 'result_image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Wrapper>
      <Label
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handleDrop}
      >
        {resultImage ? (
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '1000px' }}>
              <ImgDiv>
                <Title>Your current appearance</Title>
                <SelectedImg src={selectedImage} alt="Selected Image" />                  
              </ImgDiv>
              <ImgDiv>
                <Title>The image of you abusing drugs</Title>
                <SelectedImg src={resultImage} alt="Selected Image" />                  
              </ImgDiv>              
            </div>
            <Button onClick={downloadResultImage}>Download</Button>
          </div>

        ) : (
          <Container>
            <input 
              type="file" 
              accept="image/*" 
              style={{ display: 'none' }} 
              onChange={handleFileSelect}
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
}

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

const Button = styled.button`
  width: 150px;
  height: 60px;
  border: 2px solid #4B4EFC;
  border-radius: 5px;
  color: #4B4EFC;
  font-size: 24px;
  background-color: transparent;
  margin-left: 50px;
`;

export default AIImage;