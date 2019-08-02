import React, { Component } from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from "@material-ui/core/Dialog";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiTextField from "@material-ui/core/TextField";
import MuiPaper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { Grid, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import Programas from './Programas';
import { saveFacultad } from '../actions';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',

    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },

});



const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        overflowX: 'auto',

    },
}))(MuiDialogContent);

const TextField = withStyles(theme => ({
    root: {
        padding: theme.spacing(1),
    },

}))(MuiTextField);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Paper = withStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        width: '100%',


    }
}))(MuiPaper);


class FacultadModal extends Component {


    state = {
        nombreFacultad: '',
        open:false
    }

    handleClose = ()=> {
        this.setState({
          open:false
        })
      }

    handledChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handledSubmit = e => {
        e.preventDefault();
        const { addFacultad } = this.props
        const jsonFacultad={
            "nombre":this.state.nombreFacultad
        }
        addFacultad(jsonFacultad);
        this.handleReset();
    }

    handleReset = () => {
        this.setState({
            nombreFacultad: ''
        });
    };

    render() {

        return (
            <React.Fragment>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Crear Facultad
                </Button>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                    fullWidth
                    maxWidth={'md'}
                    scroll={'body'}
                >
                    <form onSubmit={this.handleSubmit}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            Crear Facultad
                    </DialogTitle>
                        <Divider />
                        <DialogContent  >
                            <Grid container spacing={2}>
                                <Paper>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Nombre"
                                            value={this.state.nombreFacultad}
                                            onChange={this.handledChange}
                                            margin="dense"
                                            variant="outlined"
                                            name="nombreFacultad"
                                        />
                                    </Grid>
                                </Paper>
                                <Grid item xs={12}>
                                    <Programas/>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary">
                                Cancelar
                            </Button>
                            <Button type="submit" color="primary" >
                                Guardar
                             </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFacultad: jsonFacultad => {
            dispatch(saveFacultad(jsonFacultad));
        }
    };
};


export default connect(null, mapDispatchToProps)(FacultadModal);
