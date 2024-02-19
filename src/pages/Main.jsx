import Intro from "../components/main/Intro";
import Report from "../components/main/Report";
import UseCase from "../components/main/UseCase";
import Chatbot from "../components/main/Chatbot";

const Main = () => {
  return(
    <>
      <Intro />
      <Chatbot />
      <Report />
      <UseCase />
    </>
  );
};

export default Main;