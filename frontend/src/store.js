import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	adminLoginReducer, adminRegisterReducer, sellerLoginReducer,

} from "./reducers/userReducers";
import { categoryListReducer } from "./reducers/categoryReducers";

import {
	productCreateReducer,
	productListReducer,
	//productDeleteReducer,
	//productUpdateReducer,
	//viewProductListForSiteManagerReducer,
	//viewProductListForStaffReducer,
} from "./reducers/sellerProductReducers";


//create your states here
const reducer = combineReducers({
	admin_Login: adminLoginReducer,
	adminRegistar: adminRegisterReducer,
	categoryList: categoryListReducer,
	productList: productListReducer,
	seller_Login: sellerLoginReducer,
	productCreate:productCreateReducer

});

const adminInfoFromStorage = localStorage.getItem("adminInfo") ? JSON.parse(localStorage.getItem("adminInfo")) : null;
const sellerInfoFromStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : null;


const initialState = {
	admin_Login: { adminInfo: adminInfoFromStorage },
	seller_Login:{sellerInfo:sellerInfoFromStorage}
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;