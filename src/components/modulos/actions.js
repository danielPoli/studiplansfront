import axios from 'axios';
import { API_URL } from '../../constantsGlobal';
import { LIST_MODULOS,ADD_MODULO,ADD_CONTENIDO, OPEN_MODAL_DOCENTE, OBTENER_MODULO } from './types';

export const listModulos = (modulos) => {
    return {
        type: LIST_MODULOS,
        modulos
    }
};
export const listAllModulos = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/modulo/listModulo`)
            .then(Response => {
                dispatch(listModulos(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const saveModulo = (json) => {
    return (dispatch) => {
        return axios.post(`${API_URL}/modulo/saveModulo`, json)
            .then(response => {
                dispatch(saveModuloSuccess(response))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const saveModuloSuccess = (data) => {
    return {
        type: ADD_MODULO,
        payload:data
    }
};

export const addContenidoModulo = (contenido) =>{
    return{
        type: ADD_CONTENIDO,
        payload: contenido
    }
}

export const openModal=(open)=>{
    return{
        type: OPEN_MODAL_DOCENTE,
        payload: open
    }
}

export const obtenerModulo=(id)=>{
    return(dispatch) =>{
        return axios.get(`${API_URL}/modulo/getModulo/${id}`)
            .then(response =>{
                dispatch(obtenerModuloSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const obtenerModuloSuccess = (data)=>{
    return {
        type: OBTENER_MODULO,
        payload:data
    }
}