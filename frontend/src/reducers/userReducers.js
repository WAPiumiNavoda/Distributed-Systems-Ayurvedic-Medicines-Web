import {
	ADMIN_LOGIN_FAIL,
	ADMIN_LOGIN_REQUEST,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGOUT,
	ADMIN_REGISTER_FAIL,
	ADMIN_REGISTER_REQUEST,
	ADMIN_REGISTER_SUCCESS,
	SELLER_LOGIN_FAIL,
	SELLER_LOGIN_REQUEST,
	SELLER_LOGIN_SUCCESS,
	SELLER_LOGOUT,
	
} from "../constants/userConstants";

export const adminLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_LOGIN_REQUEST:
			return { loading: true };
		case ADMIN_LOGIN_SUCCESS:
			return { loading: false, adminInfo: action.payload };
		case ADMIN_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case ADMIN_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const sellerLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_LOGIN_REQUEST:
			return { loading: true };
		case ADMIN_LOGIN_SUCCESS:
			return { loading: false, sellerInfo: action.payload };
		case ADMIN_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case ADMIN_LOGOUT:
			return {};

		default:
			return state;
	}
};


//userRegister
export const adminRegisterReducer  =(state={}, action) =>{
	switch (action.type) {
		case ADMIN_REGISTER_REQUEST:
			return {loading: true};
		case ADMIN_REGISTER_SUCCESS:
			return {loading: false,adminInfo:action.payload};
		case ADMIN_REGISTER_FAIL:
			 return {loading: false,error:action.payload};
		default:
			return state;
	}
	}; 