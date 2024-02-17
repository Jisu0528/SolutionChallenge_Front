import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ImageBox = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imagePaths = [
    require('../../assests/drugImage.png'),
    require('../../assests/drugImage2.png'),
    require('../../assests/drugImage.png'),
    require('../../assests/drugImage2.png'),
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imagePaths.length]);

  return(
    <Wrapper>
      {imagePaths.map((imagePath, index) => (
        <Slide
          key={index}
          src={imagePath}
          alt={`Slide ${index}`}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: 440px;
  border-radius: 5px;
  border: none;
  position: relative;
  overflow: hidden;
  margin-left: 100px;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ImageBox;