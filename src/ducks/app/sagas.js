import {
    loginErrorAction,
    loginRequestAction,
    loginSuccessAction,
    registerErrorAction,
    registerRequestAction, registerSuccessAction
} from "./actions";
import {put, all, takeLatest, call} from 'redux-saga/effects'
import {actionTypes} from "./actionTypes";
import {login, register} from "../../services/requests";

export function* loginSaga(credentials) {
    try {
        yield put(loginRequestAction());
        const response = yield call(login, credentials);
        yield put(loginSuccessAction(response.data));
    } catch (error) {
        yield put(loginErrorAction(error));
    }
}

export function* registrationSaga(credentials) {
    try {
        yield put(registerRequestAction(credentials));
        const response = yield call(register, credentials);
        yield put(registerSuccessAction(response.data));
    } catch (error) {
        yield put(registerErrorAction(error));
    }
}

export default function* appSagaWatcher() {
    yield all([
       takeLatest(actionTypes.LOGIN, loginSaga),
        takeLatest(actionTypes.REGISTRATION, registrationSaga),
    ]);
}