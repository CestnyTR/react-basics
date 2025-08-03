import React from "react";
import { Link, Outlet } from "react-router-dom";

const Path = () => {
  return (
    <div className="pathWrapper">
      <h1>Relative Path && Absolute Path </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fuga mollitia reiciendis nobis, illo suscipit repellat nulla quaerat
        voluptates omnis odio voluptate eaque quia corrupti nesciunt obcaecati
        aut iste hic?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ullam
        consequuntur iure reprehenderit quod ab ipsum ipsam? Eveniet temporibus
        molestias tempore optio corrupti. Sit voluptatibus facere tenetur nihil
        tempore? Recusandae?
      </p>
      <div className="btnGroup">
        <Link to="frontend">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Path;
