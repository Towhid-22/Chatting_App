import React from "react";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Group from "./components/Group";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
