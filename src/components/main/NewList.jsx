import styled from "styled-components";
import NewsItem from "./NewsItem";

export default function NewsList() {
  // 임시 뉴스 데이터
  const newsData = [
    {id:0, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:1, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:2, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:3, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:4, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:5, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:6, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:7, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
    {id:8, title: "ARRESTED FOR MINOR DRUG OFFENSE IN TN", link: "https://www.tmz.com/2024/02/01/darius-rucker-arrested-minor-drug-offense-tennessee/"},
  ];

  return (
    <Wrapper>
      <Title>News List</Title>
      {newsData.map((news, index) => (
        <NewsItem key={news.id} index={index} item={news} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.div`
  width: 450px;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  font-size: 28px;
  font-weight: 600;  
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
`;