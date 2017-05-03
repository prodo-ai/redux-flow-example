import {reducer} from "./reducer";
import {createStore} from "redux";

export const setupRedux = () => createStore(reducer);
