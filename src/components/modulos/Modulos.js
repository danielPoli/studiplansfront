import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { Divider } from '@material-ui/core';
import {listAllModulos, openModal, obtenerModulo} from './actions';
import CrearModulo from './CrearModulo';

const Paper = withStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),

  }
}))(MuiPaper);

const Table = withStyles(() => ({
  table: {
    minWidth: 650,
  },
}))(MuiTable);

class Modulos extends Component {

  componentDidMount() {
    const { listModulos } = this.props;
    listModulos();
  }

  handledClicEdit = (id) => {
    const { modulo, openModal } = this.props;
    modulo(id);
    openModal(true);
  }

  render() {
    const { modulos } = this.props;
    return (
      <React.Fragment>
        <CrearModulo/>
        <br />
        <Divider />
        <br />
        <Paper>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Modalidad</TableCell>
                <TableCell align="left">Creditos</TableCell>
                <TableCell align="left">Acto administrativo</TableCell>
                <TableCell align="left">Semestre</TableCell>
                <TableCell align="left">Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {modulos.map(modulo => {
              return (
                <TableRow key={modulo.idModulo}>
                  <TableCell component="th" scope="row">
                    {modulo.nombreModulo}
                  </TableCell>
                  <TableCell align="left">{modulo.modalidadModulo}</TableCell>
                  <TableCell align="left">{modulo.creditosModulo}</TableCell>
                  <TableCell align="left">{modulo.actoAdministrativo}</TableCell>
                  <TableCell align="left">{modulo.semestre.descripcionSemestre}</TableCell>
                  <TableCell>
                  <IconButton aria-label="Edit" component='a' onClick={() => this.handledClicEdit(modulo.idModulo)}>
                    <EditIcon />
                  </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    listModulos: () => {
      dispatch(listAllModulos());
    },
    modulo:(id)=>{
      dispatch(obtenerModulo(id));
    },
    openModal: (open) => {
      dispatch(openModal(open));
    }
  };
};

const mapStateToProps = state => {
  return {
    modulos: state.modulos.listModulos
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modulos); 