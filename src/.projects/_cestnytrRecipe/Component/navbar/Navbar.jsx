import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const user = localStorage.getItem("user");

  const [show, setShow] = useState(false);
  const togleMenu = () => {
    setShow(!show);
  };
  const setUser=()=>{
    localStorage.removeItem("user");
  }
  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <i>{"<CestnyTR/>"}</i>
          <span>Recipe</span>
        </Link>
      </div>
      <div className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink onClick={ setUser} to="login">{user ? "Logout" : "Login"}</NavLink>
        <NavLink to="about">About</NavLink>
      </div>
      <div className="burgerMenu" onClick={togleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
