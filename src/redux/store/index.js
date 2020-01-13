import {combineReducers} from "redux";
import FetchNote from "../reducer/fetchNote";
const reducers = combineReducers({note: FetchNote});
export default reducers;
