import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../redux";

export const UseAction=()=>{
    const dispatch=useDispatch();
    return bindActionCreators(actionCreator,dispatch)
}
