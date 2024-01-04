import React from "react";
import { Link,NavLink } from "react-router-dom";

let Display=()=>{

    return (
        <nav>
           <NavLink to="/">ALL ITEMS</NavLink>
           <NavLink to="/mycart">MY CART</NavLink>
        </nav>
    )
}

export default Display;