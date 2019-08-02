import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Divider } from '@material-ui/core';
import MuiPaper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addContenidoModulo } from './actions';



const Paper = withStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: theme.spacing(3),
    width: '100%',

    marginBottom: theme.spacing(2),

  }
}))(MuiPaper);

const TextField = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },

}))(MuiTextField);

const SelectDate = withStyles(() => ({
  root: {
    minWidth: 240,
    marginRight: 240
  }
}))(TextField);
const AddButton = withStyles(() => ({
  root: {
    marginRight: 700
  }
}))(Button)

class AddContenido extends Component {

  state = {
    open: false,
    numUnidad: '',
    descripcionUnidad: '',
    vigenciaContenido: ''

  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handledAddContenido = e => {
    const { adiconContenido } = this.props;
    e.preventDefault();
    const contenido = {
      "numUnidad": this.state.numUnidad,
      "descripcionUnidad": this.state.descripcionUnidad,
      "vigenciaContenido": this.state.vigenciaContenido
    }
    adiconContenido(contenido);
    this.handleClose();
  }

  render() {
    return (
      <React.Fragment>
        <AddButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Agregar
        </AddButton>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Agregar material docente</DialogTitle>
          <DialogContent>
            <Divider />
            <Grid container spacing={2}>
              <Paper>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    id="name"
                    label="Numero unidad"
                    name="numUnidad"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange}
                    value={this.state.numUnidad}

                  />
                  <TextField
                    margin="dense"
                    id="name"
                    label="Descripcion"
                    name="descripcionUnidad"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange}
                    value={this.state.descripcionUnidad}
                  />
                  <SelectDate
                    id="date"
                    label="Vigencia"
                    type="date"
                    margin="dense"
                    variant="outlined"
                    name="vigenciaContenido"
                    value={this.state.vigenciaContenido}
                    onChange={this.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Paper>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
                </Button>
            <Button onClick={this.handledAddContenido} color="primary">
              Agregar
                </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adiconContenido: contenido => {
      dispatch(addContenidoModulo(contenido));
    }
  };
};

const mapStateToProps = state => {
  
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContenido);