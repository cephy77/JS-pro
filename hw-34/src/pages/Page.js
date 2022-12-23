import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import Test from "./Test/Test";
import Cart from "./Cart/Cart";

function Page() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Navigate replace to="error" />} />
    </Routes>
  );
}

export default Page;
