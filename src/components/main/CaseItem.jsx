import styled from "styled-components";

const CaseItem = ({item}) => {
  return (
    <Wrapper>
      <Image src={item.usage_image} alt={item.usage_title} referrerPolicy="no-referrer" crossOrigin="anonymous" />
      <TitleContainer>{item.usage_title}</TitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  width: 360px;
  height: 430px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: relative;
`;

const TitleContainer = styled.div`
  background-color: rgb(234, 234, 245, 0.6);
  width: 360px;
  height: 140px;
  position: absolute;
  border-radius: 0 0 5px 5px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  box-sizing: border-box;
  text-align: center;
`;

export default CaseItem;