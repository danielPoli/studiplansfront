import { ADD_TIPODOC, LIST_TIPODOC, ADD_FACULTAD } from './types';
import axios from 'axios';
import { API_URL } from '../../../constantsGlobal';

export const saveTipoDoc = ({ nombreTipoDoc }) => {
    let json = {
        idTipoDocumento:null,
        nombreTipoDocumento: nombreTipoDoc
    }
    return (dispatch) => {
        return axios.post(`${API_URL}/tipodocumento/saveTipoDocumento`,  json )
            .then(Response => {
                dispatch(saveTipoDocSuccess(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const saveTipoDocSuccess = (data) => {
    return {
        type: ADD_TIPODOC,
        payload: {
            nombreTipoDocumento: data.nombreTipoDocumento
        }
    }
};

export const listTipoDoc = (tipoDocs) => {
    return {
        type: LIST_TIPODOC,
        tipoDocs
    }
};
export const listAllTipoDoc = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/tipodocumento/tipodocumentoList`)
            .then(Response => {
                dispatch(listTipoDoc(Response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const saveFacultad = (json)=>{
    return(dispatch) =>{
        return axios.post(`${API_URL}/facultades/saveFacultad`, json)
        .then(Response =>{
            dispatch(saveFacultadSuccess(Response.data));
        })
        .catch(error =>{
            throw(error);
        })
    }
}

export const saveFacultadSuccess = (data)=>{
    return {
        type: ADD_FACULTAD,
        payload: data
    }
}