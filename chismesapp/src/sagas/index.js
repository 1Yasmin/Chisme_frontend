import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchChismes, postChisme, removeChisme } from './saga'; 

function* Saga() {
    yield takeLatest(types.CHISME_REQUEST, fetchChismes)
    yield takeLatest(types.CHISME_POSTED, postChisme)
    yield takeLatest(types.CHISME_DELETED, removeChisme)
}

export default Saga;