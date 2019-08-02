import { LIST_DOCENTE, ADD_DOCENTE, ADD_MATERIAL, OBTENER_DOCENTE, OPEN_MODAL_DOCENTE,DELETE_DOCENTE } from './types';
import axios from 'axios';
import { API_URL } from '../../../constantsGlobal';

export const saveDocente = (json) => {
    return (dispatch) => {
        return axios.post(`${API_URL}/docentes/saveTeachers`, json)
            .then(response => {
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

export const obtenerDocente = (id)=>{
    return(dispatch) =>{
        return axios.get(`${API_URL}/docentes/getTeacher/${id}`)
            .then(response =>{
                dispatch(obtenerDocenteSuceess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const obtenerDocenteSuceess = (data)=>{
    return {
        type: OBTENER_DOCENTE,
        payload:data
    }
}

export const deleteDocente = (id)=>{
    return(dispatch)=>{
        return axios.delete(`${API_URL}/docentes/delteTeacher/${id}`)
        .then(response =>{
            dispatch(deleteDocenteSuccess(response.data))
        })
        .catch(error =>{
            throw(error);
        });
    };
};

export const deleteDocenteSuccess =(data)=>{
    return{
        type: DELETE_DOCENTE,
        payload:data
    }
}

export const addMaterial = (material)=>{
    return {
        type: ADD_MATERIAL,
        payload: material
    }
}

export const openModal=(open)=>{
    return{
        type: OPEN_MODAL_DOCENTE,
        payload: open
    }
}