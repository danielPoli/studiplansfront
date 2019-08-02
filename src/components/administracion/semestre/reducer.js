import { ADD_SEMESTRE, LIST_SEMESTRE } from './types';
const initialState = {
    listSemestre: [],

}

export default function semestreReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SEMESTRE:
            return [...state, action.payload]
        case LIST_SEMESTRE:
            return { ...state, listSemestre: action.payload }
        default:
            return state
    }

}