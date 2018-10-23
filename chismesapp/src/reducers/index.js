import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../types';


const byId = (state = {}, action) => {
    switch (action.type) {

        case types.CHISME_POSTED: {
            const chisme = action.payload;
            return ({
                ...state,
                [chisme.id]: {
                    ...chisme
                }
            })
        }

        case types.CHISME_DELETED: {
            const id = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        case types.CHISME_UPDATED: {
            const {old_id, id, title, content, date} = action.payload;
            const chisme_nuevo = {
                id,
                title,
                content,
                date,
            }
            const new_state = state;
            delete new_state[id];
            return {
                ...new_state,
                [chisme_nuevo.id]: {
                    ...chisme_nuevo,
                }
            }
        }

        case types.CHISME_SUCCESS: {
            const chismes = action.payload;
            const new_state = {};
            chismes.forEach(chisme => new_state[chisme.id] = chisme);
            console.log(new_state)
            return new_state;
        }

        default: {
            return state;
        }
    }
}

const order = (state = [], action) => {
    switch (action.type) {

        case types.CHISME_POSTED: {
            const { id } = action.payload;
            return([
                ...state,
                id,
            ])
        }

        case types.CHISME_DELETED: {
            const id = action.payload;
            const index = state.indexOf(id)
            const new_state = [
                ...state.slice(0, index),
                ...state.slice(index+1, state.length)
            ];
            console.log(new_state)
            return new_state;
        }

        case types.CHISME_UPDATED: {
            const {old_id, id} = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }

        case types.CHISME_SUCCESS: {
            const chismes = action.payload;
            const new_state = [];
            chismes.forEach(chisme => new_state.push(chisme.id));
            return new_state;
        }

        default: {
            return state;
        }
    }
}

const current = (state= '', action) => {

    switch (action.type) {
        case types.CHISME_CHANGED: {
            return action.payload
        }

        default: {
            return state;
        }
    }
}

// selectores
export const getChisme = (state, id) => state.byId[id];
export const getChismes = (state) => state.order.map(
    id => getChisme(state, id)
);

// reductores
const reducer = combineReducers({ 
    byId,
    order,
    current,
    form: formReducer,
 });

export default reducer;
