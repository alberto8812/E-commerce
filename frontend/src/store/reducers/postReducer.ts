import { Action } from "../action";
import Post from "../../model/postModels";
import ActionType from "../action/action-types";


interface PostState{
    loading:boolean;
    error:string | null;
    data:Post[]|null;
}


const   initialState={loading:false,error:null,data:null};



export const postReducer= (state:PostState = initialState, action:Action) => {
  switch (action.type) {

  case ActionType.GET_POST_REQUEST :
    return state

  default:
    return state
  }
}
