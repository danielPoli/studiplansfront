import { LIST_DOCENTE, ADD_DOCENTE } from './types';
import axios from 'axios';
import { API_URL } from '../../../constantsGlobal';

export const saveDocente = (json) => {
    return (dispatch) => {
        return axios.post(`${API_URL}/docentes/saveTeachers`, json)
            .then(response => {
                debugger
                dispatch(saveDocenteSuccess(response))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const saveDocenteSuccess = (data) => {
    return {
        type: ADD_DOCENTE,
        payload:data.config.data
    }
};

export const listDocentes = (docentes) => {
    return {
        type: LIST_DOCENTE,
        docentes
    }
};

export const listAllDocentes = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/docentes/teachersList`)
            .then(response => {
                
                dispatch(listDocentes(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};