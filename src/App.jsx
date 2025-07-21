import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StudentPage from "./Pages/StudentPage";

function App() {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/student", element: <StudentPage /> },
  ];
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
