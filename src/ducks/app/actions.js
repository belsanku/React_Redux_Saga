import {actionTypes} from "./actionTypes";

export function loginRequestAction(user) {
    return {
        type: actionTypes.LOGIN_REQUEST,
        user
    }
}

export function loginAction(user) {
    return {
        type: actionTypes.LOGIN,
        user
    }
}

export function loginSuccessAction(user) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user
    }
}

export function loginErrorAction(error) {
    return {
        type: actionTypes.LOGIN_ERROR,
        error
    }
}

export function logoutAction() {
    return {
        type: actionTypes.LOGOUT
    }
}

export function setUsernameAction(payload) {
    return {
        type: actionTypes.CHANGE_NAME,
        username: payload
    }
}

export function registerRequestAction(user) {
    return {
        type: actionTypes.REGISTRATION_REQUEST,
        user
    }
}

export function registerAction(user) {
    return {
        type: actionTypes.REGISTRATION,
        user
    }
}

export function registerErrorAction(error) {
    return {
        type: actionTypes.REGISTRATION_ERROR,
        error
    }
}

export function registerSuccessAction(user) {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
        user
    }
}

