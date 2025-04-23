import { Navigate, Route, Routes } from "react-router";
import { Inicio } from "../components/AppComponent/Inicio";
import { Servicios } from "../components/AppComponent/Servicios";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/index"></Navigate>}></Route>
      <Route path="/index" element={<Inicio/>}></Route>
      <Route path="/services" element={<Servicios/>}></Route>
    </Routes>
  );
};
