import { LIST_MODULOS, ADD_MODULO, ADD_CONTENIDO, OPEN_MODAL_DOCENTE, OBTENER_MODULO } from "./types";
const initialState = {
    listModulos: [],
    listContenido: [],
    modulo:{},
    open: false

}

export default function moduloReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_MODULOS:
            return { ...state, listModulos: action.modulos }
        case ADD_MODULO:
            return [...state.listModulos]
        case ADD_CONTENIDO:
            let contenidoCopy = state.listContenido;
            contenidoCopy.push(action.payload);
            return Object.assign({}, state, {listContenido: contenidoCopy});
        case OPEN_MODAL_DOCENTE:
            return { ...state, open: action.payload }
        case OBTENER_MODULO:
            return { ...state, modulo: action.payload }
        default:
            return state;
    }
}