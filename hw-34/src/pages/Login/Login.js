import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authorize } from "../../features/isLogin/isLogin";
import { Button, Input } from "@mui/material";
import style from "./Login.module.css";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const correctUserData = { email: "e@mail.gnome", password: "42" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      userData.email === correctUserData.email &&
      userData.password === correctUserData.password
    ) {
      dispatch(authorize());
      navigate("/");
      return;
    }
  }
  return (
    <div className={style.login}>
      <h2>Log In</h2>
      <div className={style.form_wrapper}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Input
            type="email"
            placeholder="e@mail.gnome"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="42"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ borderRadius: 0 }}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
