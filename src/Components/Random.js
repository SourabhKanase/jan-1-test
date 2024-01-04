import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { add_new_item_tocart } from "../Redux/Action/addtocartActions";
import { api_fetch_success,api_fetch_fail,api_fetching } from "../Redux/Action/actioncreaters";
import axios from "axios";

let Random=()=>{
    console.log("running");
    let dispatch=useDispatch()
    let values=useSelector((state)=>{
        return state.api;
    });



    // console.log(values);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(api_fetching()); // You might want to dispatch this action
            try {
                const response = await axios.get("https://dummyjson.com/products");
                // Assuming you want to dispatch a success action after fetching data
                dispatch(api_fetch_success(response.data.products));
            } catch (error) {
                // If there's an error, you can dispatch a fail action
                dispatch(api_fetch_fail(error));
            }
        };

        fetchData(); // Call the async function inside useEffect
    }, [dispatch]);

    function addtocart(element)
    {
       dispatch(add_new_item_tocart(element));
       console.log(values);
    
    }

    return (
       <div>
         <h1>All items</h1>
            <div className="contanier">
            {
                values.data.map((item)=>{

                    console.log(item);
                    return <div className="card" key={item.id}>
                        <img src={item.thumbnail}   />
                            <p>{item.title}</p>
                            <b style={{display:"block"}}>Price :{item.price}</b>
                            <button onClick={()=>{addtocart(item)}}>ADD TO CART</button>
                         </div>
                })
            }
            </div>
       </div>
    )
}

export default Random;