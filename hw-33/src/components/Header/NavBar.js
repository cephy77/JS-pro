import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unauthorize } from "../../features/isLogin/isLogin";
import style from "./NavBar.module.css";
import NavElement from "./NavElement";

function NavBar() {
  const authorized = useSelector((state) => state.isLogin.authorized);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function unAuth() {
    dispatch(unauthorize());
    navigate("login");
  }
  return (
    <nav>
      <ul className={style.pageNav}>
        {console.log(authorized)}
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
