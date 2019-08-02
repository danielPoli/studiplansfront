import { ADD_SEMESTRE,LIST_SEMESTRE } from "./types";
import { API_URL } from "../../../constantsGlobal";
import axios from 'axios';


export const saveSemestre = (json) => {
    return (dispatch) => {
        return axios.post(`${API_URL}/semestre/saveSemestre`, json)
            .then(Response => {
                dispatch(saveSemestreSuccess(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const saveSemestreSuccess = (data) => {
    return {
        type: ADD_SEMESTRE,
        payload: data
    }
}

export const listSemestre = (data)=>{
    return{
        type:LIST_SEMESTRE,
        payload:data
    }
}

export const listAllSemestre = ()=>{
    return (dispatch) => {
        return axios.get(`${API_URL}/semestre/semestrelist`)
            .then(Response => {
                dispatch(listSemestre(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

