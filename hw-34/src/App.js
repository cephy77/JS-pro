import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unauthorize, selectIsLogin } from "./features/isLogin/isLogin";
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
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  useEffect(() => {
    resetTimerIDLE();
    if (isLogin === null) {
      dispatch(unauthorize());
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
  );
}

export default App;
