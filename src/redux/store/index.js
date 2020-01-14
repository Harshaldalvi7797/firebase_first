import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import FetchNote from "../reducer/fetchNote";
const rootReducers = combineReducers({ note: FetchNote });
// const store = createStore(rootReducers, applyMiddleware(Thunk));

const composewrapper = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composewrapper(applyMiddleware(Thunk)));
export default store;
