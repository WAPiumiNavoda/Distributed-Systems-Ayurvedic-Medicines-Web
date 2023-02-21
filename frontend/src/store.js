import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	adminLoginReducer, adminRegisterReducer,
} from "./reducers/adminReducers";


const reducer = combineReducers({
	admin_Login: adminLoginReducer,
	adminRegistar: adminRegisterReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo") ? JSON.parse(localStorage.getItem("adminInfo")) : null;



const initialState = {
	admin_Login: { adminInfo: adminInfoFromStorage },
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;