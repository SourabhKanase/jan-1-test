import {ADD_NEW_ITEM_TOCART,REMOVE_ITEM_FROM_CART} from "./actiontypes";



export function add_new_item_tocart(data)
{
    return {
        type:ADD_NEW_ITEM_TOCART,
        payload:data,
    }


}

export function remove_from_cart(data)
{
    return {
        type:REMOVE_ITEM_FROM_CART,
        payload:data,
    }

}

