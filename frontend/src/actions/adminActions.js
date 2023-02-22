import {
	ADMIN_LOGIN_FAIL,
	ADMIN_LOGIN_REQUEST,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGOUT,
	ADMIN_REGISTER_FAIL,
	ADMIN_REGISTER_REQUEST,
	ADMIN_REGISTER_SUCCESS,
} from "../constants/adminConstants";
import axios from "axios";
import swal from "sweetalert";

export const adminLogin = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: ADMIN_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/api/users/login", { email, password, isAdmin: true }, config);

		dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "Admin Log In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
		setTimeout(function () {
			window.location.href = "/sellerCategoryAdd";
		}, 2000);
		localStorage.setItem("adminInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: ADMIN_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export function authHeader() {
	let admin = JSON.parse(localStorage.getItem("adminInfo"));

	if (admin && admin.token) {
		return { Authorization: `Bearer ${admin.token}` };
	} else {
		return {};
	}
}

export const adminLogout = () => async (dispatch) => {
	
	localStorage.removeItem("adminInfo");
	setTimeout(function () {
		window.location.href = "/";
	}, 2000);
	dispatch({ type: ADMIN_LOGOUT });
	
};


export const register = (name, email, password, pic) => async (dispatch) => {
	try {
	  dispatch({ type: ADMIN_REGISTER_REQUEST });
  
	  const config = {
		headers: {
		  "Content-type": "application/json",
		},
	  };
  
	  const { data } = await axios.post(
		"/api/users",
		{ name, pic, email, password },
		config
	  );
  
	  dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
	  swal({
		title: "Success !!!",
		text: "Registration is Successful.",
		icon: "success",
		timer: 2000,
		button: false,
	});
	setTimeout(function () {
		window.location.href = "/sellerCategoryAll";
	}, 2000);
  
	  dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
     
	  localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
	  dispatch({
		type: ADMIN_REGISTER_FAIL,
		payload:
		  error.response && error.response.data.message
			? error.response.data.message
			: error.message,
	  });
	}
  };
  