import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LogOutModal from "./components/common/LogOutModal";

let time;
const timeout = 30 * 1000;

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
  );
}

export default App;
