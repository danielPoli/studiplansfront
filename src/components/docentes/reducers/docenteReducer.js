import { LIST_DOCENTE, ADD_DOCENTE,ADD_MATERIAL,OBTENER_DOCENTE,OPEN_MODAL_DOCENTE, DELETE_DOCENTE } from './../actions/types';

const initialState = {
    listDocente: [],
    listMaterial: [],
    docente:{},
    open:false
    
  };

export default function docenteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_DOCENTE:
            return state
        case LIST_DOCENTE:
            return {...state, listDocente: action.docentes};
        case ADD_MATERIAL:
            let materialCopy =  state.listMaterial;
            materialCopy.push(action.payload);
            return Object.assign({}, state, {listMaterial: materialCopy});
        case OBTENER_DOCENTE:
            return {...state, docente: action.payload}    
        case OPEN_MODAL_DOCENTE:
            return {...state, open:action.payload}  
        case DELETE_DOCENTE:
            return {...state}
        default:
            return state;
    }
}