import {call, all} from 'redux-saga/effects';
import appSaga from "../ducks/app/sagas";

export default function* rootSaga() {
    yield all([
        call(appSaga)
    ]);
}