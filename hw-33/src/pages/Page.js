import Main from "./Main/Main";
import Login from "./Login/Login";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

function Page() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.key("authorized") ||
      localStorage.getItem("authorized") === "false"
    ) {
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
