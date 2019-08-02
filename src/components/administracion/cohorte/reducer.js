import { ALL_COHORTE } from "./types";

const initialState = {
    listCohorte: [],

}

export default function cohorteReducer(state = initialState, action) {
    switch (action.type) {
        case ALL_COHORTE:
            debugger
            return { ...state, listCohorte: action.cohorte }
        default:
            return state
    }

}