import { LIST_DOCENTE, ADD_DOCENTE,ADD_MATERIAL,OBTENER_DOCENTE } from './../actions/types';

const initialState = {
    listDocente: [],
    listMaterial: [],
    docente:{}
    
  };

export default function docenteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_DOCENTE:
            return state
        case LIST_DOCENTE:
            return {...state, listDocente: action.docentes};
        case ADD_MATERIAL:
            return {...state, listMaterial: action.payload}
        case OBTENER_DOCENTE:
                debugger
            return {...state, docente:action.payload}    
        default:
            return state;
    }
}