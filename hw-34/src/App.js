import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import MuiTheme from "./helpers/MuiTheme";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LogOutModal from "./helpers/LogOutModal";
import NotFound from "./pages/NotFound/NotFound";
import Page from "./pages/Page";

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
    <ThemeProvider theme={MuiTheme}>
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
              <Page />
              <Footer />
            </div>
          }
        />
        <Route path="/error" element={<NotFound resetTimer={removeModal} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
