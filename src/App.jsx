import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import CSSTransition from "./components/CSSTransition";
import TGroup from "./components/TGroup";
import Transition from "./components/Transitions";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CSSTransition />} />
          <Route path="/TGroup" element={<TGroup />} />
          <Route path="/Transitions" element={<Transition />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
