import { combineReducers, createStore } from "redux";
import {ShoeReducer} from "./ShoeReducer";



const rootReducer = combineReducers({
    ShoeReducer
});

const store = createStore(rootReducer);

export default store;