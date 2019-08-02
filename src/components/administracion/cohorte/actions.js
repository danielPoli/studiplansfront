import axios from "axios";
import { API_URL } from "../../../constantsGlobal";
import { ALL_COHORTE } from "./types";



export const listCohorte = (cohorte) => {
    return {
        type: ALL_COHORTE,
        cohorte
    }
};
export const listAllCohorte = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/cohorte/cohorteList`)
            .then(Response => {
                dispatch(listCohorte(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};