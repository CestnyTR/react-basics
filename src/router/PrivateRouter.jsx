import React from "react";
import { Route, Routes } from "react-router-dom";

const PrivateRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login"/>
      </Routes>
    </>
  );
};

export default PrivateRouter;
