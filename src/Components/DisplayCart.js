import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { remove_from_cart } from "../Redux/Action/addtocartActions";
import { NavLink } from "react-router-dom";


let DisplayCart=()=>{

    let values=useSelector((state)=>{
        return state.cart;
    });

    console.log(values);
    let dispatch=useDispatch();

    function removeitem(item)
    {
         dispatch(remove_from_cart(item));
    }
    function removeAll()
    {
       values.data.map((item)=>{
        dispatch(remove_from_cart(item));
       })
    }

    return (
      <div className="second">
          <div className="contanier">
            {
                values.data.map((item)=>{
                    return <div className="card" key={item.id}>
                        <img src={item.thumbnail}   />
                            <p>{item.title}</p>
                            <b style={{display:"block"}}>Price :{item.price}</b>
                            <button onClick={()=>{removeitem(item)}}>REMOVE FROM CART</button>
                        </div>
                })
            }
        </div>
        <div className="xyz">
              <center><h1>Checkout List</h1></center>
              {
                values.data.map((items)=>{
                  return <span className="second">
                    <b>${items.title}</b>
                     <p>${items.price}</p>
                  </span>
                })
              }
         <NavLink to="/"><center><button onClick={removeAll}>CLICK TO CHECKOUT</button></center></NavLink>
        </div>
      </div>
    )
}

export default DisplayCart;