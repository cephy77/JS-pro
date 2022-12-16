import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const correctUserData = { email: "e@mail.gnome", password: "42" };
  const navigate = useNavigate();
  function handleSubmit(e) {
    // e.preventDefault();
    if (
      userData.email === correctUserData.email &&
      userData.password === correctUserData.password
    ) {
      localStorage.setItem("authorized", true);
      navigate("/");
      return;
    }
    console.log(userData);
  }
  return (
    <div className={style.login}>
      <h2>Log In</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          placeholder="e@mail.gnome"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
        />
        <input
          type="password"
          placeholder="42"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
export default Login;
