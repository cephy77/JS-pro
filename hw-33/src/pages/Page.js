import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";

function Page() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="error" />} />
    </Routes>
  );
}

export default Page;
