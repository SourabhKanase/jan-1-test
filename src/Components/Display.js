import React from "react";
import { Link,NavLink } from "react-router-dom";

let Display=()=>{

    return (
        <nav className="abc">
        <NavLink to="/">Shopping Cart</NavLink>
          <div>
          <NavLink to="/">ALL ITEMS</NavLink>
           <NavLink to="/mycart">MY CART</NavLink>
          </div>
        </nav>
    )
}

export default Display;