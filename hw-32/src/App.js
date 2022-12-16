import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LogOutModal from "./components/common/LogOutModal";

import NotFound from "./components/NotFound/NotFound";

let time;
const timeout = 10 * 60 * 1000;

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    resetTimerIDLE();
  }, []);
  function removeModal() {
    setShowModal(false);
    resetTimerIDLE();
  }
  function resetTimerIDLE() {
    clearTimeout(time);
    time = setTimeout(() => {
      setShowModal(true);
    }, timeout);
  }
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div
            className="App"
            onMouseMove={resetTimerIDLE}
            onKeyDown={resetTimerIDLE}
          >
            {showModal ? <LogOutModal reset={removeModal} /> : <></>}
            <Header />
            <Main />
            <Footer />
          </div>
        }
      />
      <Route path="error" element={<NotFound resetTimer={removeModal} />} />
    </Routes>
  );
}

export default App;
