import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";

import Footer from "./components/Footer/Footer";
import LogOutModal from "./helpers/LogOutModal";

import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

let time;
const timeout = 10 * 60 * 1000;

function App() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    resetTimerIDLE();
    if (
      !localStorage.key("authorized") ||
      localStorage.getItem("authorized") === "false"
    ) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        path="/"
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
      <Route
        path="/login"
        element={
          <div
            className="App"
            onMouseMove={resetTimerIDLE}
            onKeyDown={resetTimerIDLE}
          >
            {showModal ? <LogOutModal reset={removeModal} /> : <></>}
            <Header />
            <Login />
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<Navigate replace to="error" />} />
      <Route path="error" element={<NotFound resetTimer={removeModal} />} />
    </Routes>
  );
}

export default App;
