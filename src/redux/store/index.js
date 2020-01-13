import { combineReducers, createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import FetchNote from "../reducer/fetchNote";
const rootReducers = combineReducers({ note: FetchNote });
const store = createStore(rootReducers, applyMiddleware(Thunk));
export default store;
