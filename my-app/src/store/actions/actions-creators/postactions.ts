import axios from "axios";

import { Dispatch} from "redux";

import { Action } from "..";
import post from "../../../model/postModels";
import ActionType from "../action-types";


export const getposts=()=>async(dispatch:Dispatch<Action>)=>{
    try {
        dispatch({
            type:ActionType.GET_POST_REQUEST,
        })

        const {data}=await axios.get<post[]>('https://json');
        dispatch({
            type:ActionType.GET_POST_SUCCESS,
            payload:data

        })
    } catch (error) {
        dispatch({
            type:ActionType.GET_POST_FAIL,
            payload:error.message
        });
        
    }
}
