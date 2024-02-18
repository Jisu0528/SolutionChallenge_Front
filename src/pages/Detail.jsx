import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { drugid } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(`/safeguardian/drug_type/${drugid}`);
        if (response.status === 200) {
          setDetailData(response.data);
        }
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchDetailData();
  }, [drugid]);

  // 자동 슬라이드
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (detailData && detailData.images && detailData.images.length > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % detailData.images.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [detailData]);

  return(
    <Wrapper>
      {detailData && (
        <>
          <Container>
            <ImageBox>
              {detailData.images && detailData.images.length > 0 && (
                <Slide src={detailData.images[currentImageIndex].image} alt={`Drug Image ${currentImageIndex}`} />
              )}
            </ImageBox>
            <Details>
              <div>
                <Name>{detailData.drug_nm}</Name>
                <Line />       
              </div>
              <Table>
                <tr>
                  <Title>Type</Title>
                  <Td>{detailData.drug_type}</Td>              
                </tr>
                <tr>
                  <Title>Feature</Title>
                  <Td>
                    {detailData.features && detailData.features.map((feature, index) => (
                      <div key={index}>◦ {feature.drug_feature}</div>
                    ))}
                  </Td>              
                </tr>
                <tr>
                  <Title>Side Effects</Title>
                  <Td>
                    {detailData.adrs && detailData.adrs.map((adr, index) => (
                      <span key={index} style={{ display: 'inline-block', width: 'auto', marginRight: '10px' }}>◦{adr.adr_nm}</span>
                    ))}
                  </Td>              
                </tr>
              </Table>
            </Details>
          </Container>        
        </>
      )}

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
  width: 600px;
`;

const ImageBox = styled.div`
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

export default Detail;