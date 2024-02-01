import Router from "./shared/Router";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;