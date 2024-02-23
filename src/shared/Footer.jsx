import styled from "styled-components";
import Logo from '../assests/logo2.png';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Img src={Logo} />
        <People>
          <Name>Hyeok Kim</Name>
          <Role>
            Backend <br />
            Data Analysis <br /><br />
          </Role>
          <Email href="rlagur258@gmail.com">rlagur258@gmail.com</Email>
        </People>
        <People>
          <Name>Yumin LEE</Name>
          <Role>
            AI <br /><br /><br />
          </Role>
          <Email  href="yuminyyy@gmail.com">yuminyyy@gmail.com</Email>
        </People>
        <People>
          <Name>Seockmin Chang</Name>
          <Role>
            AI <br /><br /><br />
          </Role>
          <Email href="ssk07079@gmail.com">ssk07079@gmail.com</Email>
        </People>
        <People>
          <Name>Jisu Han</Name>
          <Role>
            Frontend <br />
            Design <br />
            Backend <br />
          </Role>
          <Email href="0528jisu@gmail.com">0528jisu@gmail.com</Email>
        </People>
      </Container>
      <CopyRight> ⓒ Copyright All rights reserved DrugGuadian</CopyRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 300px;
  background-color: #3D3D3D;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  width: 1530px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const Img = styled.img`
  width: 148px;
  height: 77px;
  padding-right: 100px;
`;

const People = styled.div`
  color: #F6F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Name = styled.div`
  font-size: 18px;
`;

const Role = styled.div`
  font-size: 14px;
  
  text-align: center;
`;

const Email = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: inherit;
`;

const CopyRight = styled.div`
  color: #A8A8A8;
  font-size: 14px;
`;

export default Footer;