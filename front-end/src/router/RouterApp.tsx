import { Navigate, Route, Routes } from "react-router";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/index"></Navigate>}></Route>
    </Routes>
  );
};
