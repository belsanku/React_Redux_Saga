import {actionTypes as Type} from "./actionTypes";
import {STATUS} from "../../constants";

const initialState = {
    username: null,
    isLoggedIn: false,
    status: STATUS.NOT_REQUESTED,
    error: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN_REQUEST:
            return {
                ...state,
                user: action.user,
                status: STATUS.LOADING,
                error: null
            };

        case Type.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                status: STATUS.SUCCESS,
                isLoggedIn: true,
                error: null
            };

        case Type.LOGIN_ERROR:
            return {
                ...state,
                status: STATUS.ERROR,
                isLoggedIn: false,
                error: action.error
            }

        case Type.CHANGE_NAME:
            return {
                ...state,
                username: action.user.username
            };
        case Type.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                error: false
            };
        case Type.REGISTRATION_REQUEST:
            return {
                ...state,
                user: action.user,
                status: STATUS.LOADING,
                error: null
        };
        case Type.REGISTRATION_SUCCESS:
            console.log(action);
            return {
                ...state,
                user: action.user,
                status: STATUS.SUCCESS,
                isLoggedIn: true,
                error: null
            };
        case Type.REGISTRATION_ERROR:
            return {
                ...state,
                status: STATUS.ERROR,
                isLoggedIn: false,
                error: action.error
            };
        default:
            return state;
    }
}