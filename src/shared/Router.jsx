import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Main, Drugs, Detail, DeathRate, AIImage, UseCase } from "../pages";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/drugs" element={<Drugs />} />
        <Route path="/drugs/:drugid" element={<Detail />} />
        <Route path="/deathrate" element={<DeathRate />} />
        <Route path="/transformimage" element={<AIImage />} />
        <Route path="/usecase/:usecaseid" element={<UseCase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;