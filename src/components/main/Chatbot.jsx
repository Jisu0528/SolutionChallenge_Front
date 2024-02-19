import React, { useState } from "react";
import styled from "styled-components";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCKGeXcB0PhIivoqarXsDE7jAabcF4TDFc";

export default function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  async function sendMessage() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 1,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const history = chatHistory.map(item => ({
      role: item.role,
      parts: [{ text: item.message }]
    }));

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: history,
    });

    const result = await chat.sendMessage(userInput);
    const response = result.response;

    setChatHistory(prevChatHistory => [
      ...prevChatHistory,
      { role: 'user', message: userInput },
      { role: 'model', message: response.text() }
    ]);
    setUserInput("");
  }

  return (
    <Wrapper>
      <Title>Gemini</Title>
      <Div>
        <Container>
          <Chat>
            {chatHistory.map((message, index) => (
              <div key={index}>
                {message.role === 'user' ? (
                  <User>
                    <Role>User</Role>
                    <UChat>{message.message}</UChat>
                  </User>
                ) : (
                  <Response>
                    <Role>Response</Role>
                    <RChat>{message.message}</RChat>
                  </Response>
                )}
              </div>
            ))}
          </Chat>
          <Form>
            <Input 
              autocomplete="off"
              placeholder="Type Something" 
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button onClick={sendMessage}>ENTER</Button>
          </Form>
        </Container>        
      </Div>
    </Wrapper>
  ); 
};

const Wrapper = styled.div`
  height: 960px;
  background-color: rgb(75, 78, 252, 0.05);
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  padding: 50px 120px 0;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
`;

const Container = styled.div`
  width: 1400px;
  height: 650px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const Chat = styled.div`
  width: 100%;
  height: 570px;
  overflow-y: auto; /* auto로 변경하여 overflow가 되지 않았을 때는 스크롤 바가 자동으로 보이지 않게 함 */
  scrollbar-width: none; /* Firefox에서 스크롤 바 숨김 */
  -ms-overflow-style: none; /* Internet Explorer에서 스크롤 바 숨김 */
  
  &::-webkit-scrollbar {
    display: none; /* WebKit 엔진을 사용하는 브라우저(예: Chrome, Safari)에서 스크롤 바 숨김 */
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Response = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Role = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #3D3D3D;
  width: fit-content;
`;

const UChat = styled.div`
  padding: 5px 20px; 
  box-sizing: border-box;
  border-radius: 20px 0 20px 20px;
  height: 40px;
  width: fit-content;
  background-color: #7B7FF6;
  color: #FFFFFF;
  font-size: 22px;
`;

const RChat = styled.div`
  padding: 5px 20px; 
  box-sizing: border-box;
  border-radius: 0 20px 20px 20px;
  height: fit-content;
  width: fit-content;
  background-color: rgba(61, 61, 61, 0.5);
  color: #FFFFFF;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  margin-top: 5px;
`;

const Input = styled.input`
  background-color: transparent;
  border: 2px solid #4B4EFC;
  border-radius: 65px;
  outline: none;
  width: 1150px;
  height: 50px;
  padding: 0 20px;
`;

const Button = styled.div`
  background-color: #4B4EFC;
  color: #FFFFFF;
  width: 150px;
  height: 50px;
  border-radius: 65px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;