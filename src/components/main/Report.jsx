import styled from 'styled-components';

const Report = () => {
  return(
    <Wrapper>
      <iframe 
        src="https://lookerstudio.google.com/embed/reporting/3f92ef74-db8b-48a5-8e0d-5f68115ce42d/page/6zXD" 
        frameborder="0" 
        style={{width: '1280px', border: '0', height: '960px'}} 
        allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Report;