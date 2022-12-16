import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import NavElement from "./NavElement";

function NavBar() {
  const [authorized, setAuthorized] = useState(() => {
    const storaged = localStorage.getItem("authorized");
    if (storaged) {
      return JSON.parse(storaged);
    }
  });
  const navigate = useNavigate();
  function unAuth() {
    localStorage.setItem("authorized", false);
    setAuthorized(false);
    navigate("login");
  }
  return (
    <nav>
      <ul className={style.pageNav}>
        {authorized ? (
          <NavElement txt="logout" unAuth={unAuth} />
        ) : (
          <NavElement txt="login" />
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
