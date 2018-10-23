import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';


const getChismes = (url) => (
    fetch(url)
        .then( response => response.json())
        .catch( e => console.log(e)))

const guardarChisme = (url, chisme) => 
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(chisme),
        headers:{
          'Content-Type': 'application/json'
        }
    })
        .then( response => response.json())
        .catch( e => console.log(e))

const deleteChisme = (url, id) => 
    fetch(`${url}${id}/`, {
        method: 'DELETE',
    })
        .catch( e => console.log(e) )

export function* fetchChismes(action) {
    try {
        const chismes = yield call(getChismes, 'http://localhost:8000/api/v1/chisme/');

        yield put(actions.chismeSuccess(chismes));
    }
    catch (e) {

    }
}

export function* postChisme(action) {
    try {
        const { id } = action.payload;

        const chismes = yield call(guardarChisme, 'http://localhost:8000/api/v1/chisme/', action.payload );

        yield put(actions.updateChisme(id, chismes.id, chismes.title, chismes.description, chismes.created_at));;
    }
    catch (e) {

    }
}

export function* removeChisme(action) {
    try {

        yield call(deleteChisme, 'http://localhost:8000/api/v1/chisme/', action.payload );

    }
    catch (e) {

    }
}