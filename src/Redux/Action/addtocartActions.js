import {ADD_NEW_ITEM_TOCART} from "./actiontypes";



export function add_new_item_tocart(data)
{
    return {
        type:ADD_NEW_ITEM_TOCART,
        payload:data,
    }
}