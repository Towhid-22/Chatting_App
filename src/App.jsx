import React from "react";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Friends from "./components/Friends";
import NotFound from "./pages/NotFound";
import Messege from "./pages/Messege";
import RootLayout from "./components/RootLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messege" element={<Messege />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
