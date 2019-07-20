import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { listAllDocentes } from './actions';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import CrearDocente from './CrearDocente';
import { Divider } from '@material-ui/core';



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

const Table = withStyles(()=>({
  table: {
      minWidth: 650,
    },
}))(MuiTable);

class Docentes extends Component {


  componentDidMount() {
    const { listDocente } = this.props;
    listDocente();

  }

  constructor(props) {
    super(props);


  }

  render() {
    const { docentes } = this.props;
    
    return (
        <React.Fragment>
        <CrearDocente/>
        <br/>
        <Divider/>
        <br/>
      <Paper>
        <Table size="small">
          <TableHead>          
            <TableRow>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Primer apellido</TableCell>
              <TableCell align="left">Segundo apellido</TableCell>
              <TableCell align="left">Titulo mas alto</TableCell>
              <TableCell align="left">Numero documento</TableCell>
              <TableCell align="left">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docentes.map(docente => {
              return (
                <TableRow key={docente.idDocente}>
                  <TableCell component="th" scope="row">
                    {docente.nombre}
                  </TableCell>
                  <TableCell align="left">{docente.primerApellido}</TableCell>
                  <TableCell align="left">{docente.segundoApellido}</TableCell>
                  <TableCell align="left">{docente.tituloMasAlto}</TableCell>
                  <TableCell align="left">{docente.numeroDocumento}</TableCell>
                  <TableCell>
                  <IconButton aria-label="Edit" component='a' >
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listDocente: () => {
      dispatch(listAllDocentes());
    }
  };
};

const mapStateToProps = state => {
  return {
    docentes: state.docentes.listDocente
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Docentes); 