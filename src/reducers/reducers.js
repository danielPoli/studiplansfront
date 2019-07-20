import { combineReducers } from 'redux';
import docenteReducer from './../components/docentes/reducers/docenteReducer';
import tipoDocReducer from '../components/administracion/reducers/tipoDocReducer';
export default combineReducers(
    {
        docentes:docenteReducer,
        tipoDocs:tipoDocReducer
    }
);