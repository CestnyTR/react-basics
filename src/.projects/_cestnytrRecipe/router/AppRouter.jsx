import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Component/navbar/Navbar";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";

import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
