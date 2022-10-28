import { Action } from '../action/index';
import { actionType } from '../action/action-type/index';

interface RepositoriesState{
    loading:boolean;
    error:string | null;
    data: string[];
    detail:string[]
}


const initialState:RepositoriesState = {
    loading:false,
    error:null,
    data:[],
    detail:[]
}

const reducer=(
    state= initialState, 
    { type, payload }:Action
    ):RepositoriesState => {
  switch (type) {

  case actionType.GET_ALL_PRODUCTS:
    return {...state,loading:true, error:null,data:payload }

  case actionType.GET_ID_PRODUCT:
    return { ...state,loading:false, error:null,detail:payload }

  default:
    return state
  }
}

export default reducer