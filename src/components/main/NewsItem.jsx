import styled from 'styled-components';
import LinkIcon from '../../assests/link.png';

const NewsItem = ({ item }) => {
  const url = item.link;

  return (
    <Wrapper>
      <Button onClick={() => {window.open(url)}}>
        <img src={LinkIcon} alt='Link' />
        <span>{item.title}</span>
      </Button>
    </Wrapper>
  ); 
};


const Wrapper = styled.div`
  width: 450px;
  height: 66px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
`;

const Button = styled.button`
  display: flex;
  gap: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: transparent;
  align-items: center;
  padding: 10px 30px 10px 20px;
  text-align: left;
`;


export default NewsItem;