import { LIST_DOCENTE, ADD_DOCENTE } from './../actions/types';

const initialState = {
    listDocente: []
    
  };

export default function docenteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_DOCENTE:
            return state
        case LIST_DOCENTE:
            return {...state, listDocente: action.docentes};
        default:
            return state;
    }
}