import { API_FETCHING,API_FETCH_FAIL,API_FETCH_SUCCESS } from "../Action/actiontypes";

let state={
    fetching:false,
    data:[],
    err:null
}

let apireducer=(initalState=state,action)=>{

    // console.log("firstreducer running");
    switch(action.type)
    {
        case API_FETCHING: return {...initalState,fetching:true}

        case API_FETCH_SUCCESS:return {...initalState,fetching:false,data:action.payload,err:null}

        case API_FETCH_FAIL:return {...initalState,fetching:false,data:[],err:action.payload}

        default:return initalState;
    }
}

export default apireducer;