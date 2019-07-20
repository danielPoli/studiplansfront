import {ADD_TIPODOC, LIST_TIPODOC} from './../actions/types';

export default function tipoDocReducer(state=[], action){
    switch (action.type) {
        case ADD_TIPODOC:
            return[...state, action.payload];
        case LIST_TIPODOC:
            const docs = action.tipoDocs;
            return {...state, docs};
        default:
            return state;
    }
}