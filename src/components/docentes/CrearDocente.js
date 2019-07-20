import React, { Component } from 'react';
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import MuiTextField from "@material-ui/core/TextField";
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core/CssBaseline';
import { Grid, Divider } from '@material-ui/core';
import MuiContainer from '@material-ui/core/Container';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from "@material-ui/core/Dialog";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiFormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import { saveDocente } from './actions';
import { listAllTipoDoc } from '../administracion/actions';
import DenseTable from './AddMaterial';



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
        textAlign: 'center',
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
        textAlign: 'center',
        marginTop: theme.spacing(3),
        width: '100%',

        marginBottom: theme.spacing(2),

    }
}))(MuiPaper);

const Table = withStyles(() => ({
    table: {
        minWidth: 650,
    },
}))(MuiTable);

const SelectText = withStyles(() => ({
    root: {
        minWidth: 240,
    }
}))(TextField);
const SelectDate = withStyles(() => ({
    root: {
        minWidth: 240,
    }
}))(TextField);


class CrearDocente extends Component {

    state = {
        open: false,
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        fechaVinculacion: '',
        correoInstitucional: '',
        correoPersonal:'',
        tituloMasAlto:'',
    };



    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    
    
    handleSubmit = e => {
        const { addDocentes } = this.props
        e.preventDefault();
        const jsonDocente = {
            "tipoDocumento": {
                "idTipoDocumento": this.state.tipoDocumento,
            },
            "numeroDocumento": this.state.numeroDocumento,
            "nombre": this.state.nombre,
            "primerApellido": this.state.primerApellido,
            "segundoApellido": this.state.segundoApellido,
            "fechaVinculacion": this.state.fechaVinculacion,
            "correoInstitucional": this.state.correoInstitucional,
            "correoPersonal": this.state.correoPersonal,
            "tituloMasAlto": this.state.tituloMasAlto,
            "materialDocenteList": []
        }
        addDocentes(jsonDocente);
    }

    componentDidMount(){
        const {listTipoDocs} = this.props;
        listTipoDocs();
    }

    render() {
        const {docs} = this.props
        const arrayDocs = docs.docs == undefined ? []: docs.docs
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Crear docente
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
                            Crear Docente
                    </DialogTitle>
                        <Divider />
                        <DialogContent  >
                            <Grid container spacing={2}>
                                <Paper>
                                    <Grid item xs={12}>
                                        <SelectText
                                        id="outlined-select-currency"
                                        select
                                        label="Tipo de documento"
                                        name="tipoDocumento"
                                        value={this.state.tipoDocumento}
                                        onChange={this.handleChange}                                        
                                        margin="dense"
                                        variant="outlined"
                                    >
                                        {
                                            arrayDocs.map(d =>(
                                                

                                                <MenuItem key={d.idTipoDocumento} value={d.idTipoDocumento}>
                                                    {d.nombreTipoDocumento}
                                                    </MenuItem>
                                                
                                                ))
                                        }
                                    </SelectText>
                                        {/* <TextField
                                            id="outlined-name"
                                            label="Tipo de documento"
                                            margin="dense"
                                            name="tipoDocumento"
                                            variant="outlined"
                                            value={this.state.tipoDocumento}
                                            onChange={this.handleChange}
                                        /> */}
                                        <TextField
                                            id="outlined-name"
                                            label="Numero de documento"
                                            margin="dense"
                                            variant="outlined"
                                            name="numeroDocumento"
                                            value={this.state.numeroDocumento}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Nombre"
                                            margin="dense"
                                            variant="outlined"
                                            name="nombre"
                                            value={this.state.nombre}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Primer apellido"
                                            margin="dense"
                                            variant="outlined"
                                            name="primerApellido"
                                            value={this.state.primerApellido}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Segundo apellido"
                                            margin="dense"
                                            variant="outlined"
                                            name="segundoApellido"
                                            value={this.state.segundoApellido}
                                            onChange={this.handleChange}
                                        />
                                        <SelectDate
                                            id="date"
                                            label="Fecha vinculacion"
                                            type="date"
                                            margin="dense"
                                            variant="outlined"
                                            name="fechaVinculacion"
                                            value={this.state.fechaVinculacion}
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Correo institucional"
                                            margin="dense"
                                            variant="outlined"
                                            name="correoInstitucional"
                                            value={this.state.correoInstitucional}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Correo peronal"
                                            margin="dense"
                                            variant="outlined"
                                            name="correoPersonal"
                                            value={this.state.correoPersonal}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Titulo mas alto"
                                            margin="dense"
                                            variant="outlined"
                                            name="tituloMasAlto"
                                            value={this.state.tituloMasAlto}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Paper>
                                <DenseTable/>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>
                                Cancelar
                            </Button>
                            <Button type="submit" color="primary" autoFocus>
                                Guardar
                             </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDocentes: jsonDocente => {
            dispatch(saveDocente(jsonDocente));
        },
        listTipoDocs:()=>{
            dispatch(listAllTipoDoc());
        }
    };
};

const mapStateToProps = state =>{
    return{
        docs: state.tipoDocs
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CrearDocente);
