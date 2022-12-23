import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unauthorize, selectIsLogin } from "../../features/isLogin/isLogin";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function NavElement(props) {
  const authorized = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function unAuth() {
    dispatch(unauthorize());
    navigate("login");
  }
  const { cart } = props;
  let button;
  if (cart) {
    button = (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("cart")}
      >
        <LocalMallIcon />
      </Button>
    );
  } else {
    button = (
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          authorized ? unAuth() : navigate("login");
        }}
      >
        {authorized ? <LogoutIcon /> : <LoginIcon />}
      </Button>
    );
  }
  return <>{button}</>;
}

export default NavElement;
