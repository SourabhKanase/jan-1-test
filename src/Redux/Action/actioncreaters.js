import { API_FETCHING,API_FETCH_FAIL,API_FETCH_SUCCESS } from "./actiontypes";



export function api_fetching()
{
     return {
           type:API_FETCHING,
     }
}

export function api_fetch_fail(err)
{
     return {
           type:API_FETCH_FAIL,
           payload:err     
     }
}

export function api_fetch_success(data)
{
     return {
           type:API_FETCH_SUCCESS,
           payload:data,
     }
}


// export function fetching_data()
// {
//     return {

//     }
// }