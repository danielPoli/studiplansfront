import { combineReducers } from 'redux';
import docenteReducer from './../components/docentes/reducers/docenteReducer';
import tipoDocReducer from '../components/administracion/reducers/tipoDocReducer';
import semestreReducer from '../components/administracion/semestre/reducer';
import moduloReducer from '../components/modulos/reducer';
import cohorteReducer from '../components/administracion/cohorte/reducer';
export default combineReducers(
    {
        docentes:docenteReducer,
        tipoDocs:tipoDocReducer,
        semestre:semestreReducer,
        modulos:moduloReducer,
        cohorte:cohorteReducer
    }
);