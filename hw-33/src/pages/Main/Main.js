import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./About/About";
import style from "./Main.module.css";
import Shop from "./Shop/Shop";

function Main() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.isLogin.authorized);
  useEffect(() => {
    if (!isLogin) {
      navigate("login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);
  return (
    <main className={style.main}>
      <About />
      <Shop />
    </main>
  );
}

export default Main;
