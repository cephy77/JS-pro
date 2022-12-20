import { Link } from "react-router-dom";
import style from "./NavElement.module.css";
function NavElement({ txt, unAuth }) {
  let button;
  if (txt === "logout") {
    button = (
      <button className={style.element} onClick={() => unAuth()}>
        {txt}
      </button>
    );
  } else {
    button = (
      <button className={style.element}>
        <Link to={`/${txt}`}>{txt}</Link>
      </button>
    );
  }

  return <>{button}</>;
}

export default NavElement;
