import React from "react";
import errorImg from "../images/404.jpeg";
import { useNavigate, useRouteError } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();
  return (
    <div className="errorWrapper">
      <img className="error" src={errorImg} alt="error" />
      <p>{error.data || error.message}</p>

      <div>
        <button onClick={() => navigate(-1)}>&larr;Back</button>
      </div>
    </div>
  );
};

export default Error;
