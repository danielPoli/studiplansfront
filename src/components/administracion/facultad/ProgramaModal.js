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

class ProgramaModal extends Component{

  state={

    nombre:'',
    codigo:'',
    acto:'',
    open:false,
  }

   handleClickOpen = ()=> {
    this.setState({
      open:true
    })
  }

   handleClose = ()=> {
    this.setState({
      open:false
    })
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleAddMaterial = e =>{
    const {addMaterial} = this.props;
    e.preventDefault();
    const material = [{
      "descripcion":this.state.descripcion,
      "link_material_adicional":this.state.link
    }]
    addMaterial(material);
    this.handleClose();
  }

  render(){
    return(
      <React.Fragment>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Agregar programa
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar programa</DialogTitle>
        <DialogContent>
          <Divider/>
          <Grid container spacing={2}>
          <Paper>
            <Grid item xs={12}>
            <TextField              
              margin="dense"
              id="name"
              label="Nombre"
              name="nombre"
              margin="dense"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.nombre}
              
            />
            <TextField              
              margin="dense"
              id="name"
              label="Codigo"
              name="codigo"
              margin="dense"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.codigo}
            />
            <TextField              
              margin="dense"
              id="name"
              label="Acto administrativo"
              name="acto"
              margin="dense"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.acto}
            />
              </Grid>            
          </Paper>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddMaterial} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// };

export default connect(null, null)(ProgramaModal);