import { useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./Main/Main";
import Login from "./Login/Login";

function Page() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.isLogin);
  useEffect(() => {
    if (!isLogin.authorized) {
      navigate("login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="error" />} />
    </Routes>
  );
}

export default Page;
