import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import FetchNote from "../reducer/fetchNote";
import { AuthReducer } from "../reducer/auth";
const rootReducers = combineReducers({ note: FetchNote, auth: AuthReducer });
// const store = createStore(rootReducers, applyMiddleware(Thunk));

const composewrapper = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composewrapper(applyMiddleware(Thunk)));
export default store;
