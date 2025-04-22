import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { RegisterPage } from "../components/RegisterPage/RegisterPage";

export const RouterAuth = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>

      <Route path="/*" element={<Navigate to={"/auth/login"} />}></Route>
    </Routes>
  );
};
