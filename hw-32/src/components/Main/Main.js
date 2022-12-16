import { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import About from "./About/About";
import Login from "./Login/Login";
import style from "./Main.module.css";
import Shop from "./Shop/Shop";

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.key("authorized") ||
      localStorage.getItem("authorized") === "false"
    ) {
      navigate("/login");
    }
  }, []);
  return (
    <main className={style.main}>
      <div className={style.main_content}>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <About />
                  <Shop />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/error" />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default Main;
