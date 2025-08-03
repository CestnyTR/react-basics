import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Component/navbar/Navbar";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" Component={<Home />} />
          <Route path="about" Component={<About />} />
          <Route path="detail" Component={<Detail />} />
          <Route path="login" Component={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
