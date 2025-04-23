import { Navigate, Route, Routes } from "react-router";
import { RegisterPage } from "../components/AuthComponents/Register/RegisterPage/RegisterPage";
import { LoginPage } from "../components/AuthComponents/LoginPage/LoginPage";

export const RouterAuth = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>

      <Route path="/*" element={<Navigate to={"/auth/login"} />}></Route>
    </Routes>
  );
};
