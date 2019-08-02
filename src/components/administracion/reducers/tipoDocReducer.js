import {ADD_TIPODOC, LIST_TIPODOC,ADD_FACULTAD} from './../actions/types';

export default function tipoDocReducer(state=[], action){
    switch (action.type) {
        case ADD_TIPODOC:
            return[...state, action.payload];
        case LIST_TIPODOC:
            const docs = action.tipoDocs;
            return {...state, docs};
        case ADD_FACULTAD:
            return[...state, action.payload];    
        default:
            return state;
    }
}