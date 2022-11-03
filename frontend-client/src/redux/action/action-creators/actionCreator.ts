import axios from "axios";
import { actionType } from '../action-type/index';
import { Action } from "../index";
import { Dispatch } from "redux";

export const getAllProducts=()=>{
    return async(dispatch:Dispatch<Action>)=>{
        try {
            const {data}=await axios.get('http://localhost:3001/products')
            dispatch({
                type:actionType.GET_ALL_PRODUCTS,
                payload:data
            })
        } catch (error:any) {
            console.log(error)
        }
    }
}


