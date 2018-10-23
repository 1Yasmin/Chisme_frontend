import * as types from '../types';

import uuidv4 from 'uuid/v4';


export const postChisme = (
    title,
    content,
    date,
) => ({
    type: types.CHISME_POSTED,
    payload: {
        id:  uuidv4(),
        title,
        content,
        date,
    }
});

export const deleteChisme = (
    id,
) => ({
    type: types.CHISME_DELETED,
    payload: id
})

export const updateChisme = (
    old_id,
    id,
    title,
    content,
    date,
) => ({
    type: types.CHISME_UPDATED,
    payload: {
        old_id,
        id,
        title,
        content,
        date,
    }
})

export const chismeRequest = () => ({
    type: types.CHISME_REQUEST,
})

export const chismeSuccess = (
    gossips
) => ({
    type: types.CHISME_SUCCESS,
    payload: gossips
})

export const chismeChanged = (id) => ({
    type: types.CHISME_CHANGED,
    payload: id,
})