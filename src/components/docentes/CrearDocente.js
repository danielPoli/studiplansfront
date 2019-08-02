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
import MenuItem from '@material-ui/core/MenuItem';
import { saveDocente, openModal } from './actions';
import { listAllTipoDoc } from '../administracion/actions';
import ListMaterial from './ListMaterial';



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
        correoPersonal: '',
        tituloMasAlto: '',
    };

    limpiarCampos = () => {
        this.setState({
            tipoDocumento: '',
            numeroDocumento: '',
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            fechaVinculacion: '',
            correoInstitucional: '',
            correoPersonal: '',
            tituloMasAlto: '',
        })
    }


    handleClickOpen = () => {
        const { openModal } = this.props
        openModal(true);
    };

    handleClose = () => {
        const { openModal } = this.props
        this.limpiarCampos();
        openModal(false);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };




    handleSubmit = e => {
        const { addDocentes, listMateria, docente } = this.props
        e.preventDefault();
        debugger
        const jsonDocente = {
            "idDocente": docente != undefined && docente != null ? docente.idDocente : '',
            "tipoDocumento": {
                "idTipoDocumento": this.state.tipoDocumento == '' && docente.tipoDocumento != undefined && docente.tipoDocumento != null ? docente.tipoDocumento.idTipoDocumento : this.state.tipoDocumento,
            },
            "numeroDocumento": this.state.numeroDocumento == '' && docente.numeroDocumento != undefined && docente.numeroDocumento != null ? docente.numeroDocumento : this.state.numeroDocumento,
            "nombre": this.state.nombre == '' && docente.nombre != undefined && docente.nombre != null ? docente.nombre : this.state.nombre,
            "primerApellido": this.state.primerApellido == '' && docente.primerApellido != undefined && docente.primerApellido != null ? docente.primerApellido : this.state.primerApellido,
            "segundoApellido": this.state.segundoApellido == '' && docente.segundoApellido != undefined && docente.segundoApellido != null ? docente.segundoApellido : this.state.segundoApellido,
            "fechaVinculacion": this.state.fechaVinculacion == '' && docente.fechaVinculacion != undefined && docente.fechaVinculacion != null ? docente.fechaVinculacion : this.state.fechaVinculacion,
            "correoInstitucional": this.state.correoInstitucional == '' && docente.correoInstitucional != undefined && docente.correoInstitucional != null ? docente.correoInstitucional : this.state.correoInstitucional,
            "correoPersonal": this.state.correoPersonal == '' && docente.correoPersonal != undefined && docente.correoPersonal != null ? docente.correoPersonal : this.state.correoPersonal,
            "tituloMasAlto": this.state.tituloMasAlto == '' && docente.tituloMasAlto != undefined && docente.tituloMasAlto != null ? docente.tituloMasAlto : this.state.tituloMasAlto,
            "materialDocenteList": docente.materialDocenteList != undefined && docente.materialDocenteList != null ? docente.materialDocenteList : [],
        }
        console.log("jsonDocente",jsonDocente);
        addDocentes(jsonDocente);
        this.handleClose();
    }

    componentDidMount() {
        const { listTipoDocs } = this.props;
        listTipoDocs();
    }


    render() {
        const { docs, open, docente } = this.props
        const arrayDocs = docs.docs == undefined ? [] : docs.docs
        let tipoDocumento = this.state.tipoDocumento == '' && docente.tipoDocumento != undefined && docente.tipoDocumento != null ? docente.tipoDocumento.idTipoDocumento : this.state.tipoDocumento;
        let numeroDocumento = this.state.numeroDocumento == '' && docente.numeroDocumento != undefined && docente.numeroDocumento != null ? docente.numeroDocumento : this.state.numeroDocumento;
        let nombre = this.state.nombre == '' && docente.nombre != undefined && docente.nombre != null ? docente.nombre : this.state.nombre;
        let primerApellido = this.state.primerApellido == '' && docente.primerApellido != undefined && docente.primerApellido != null ? docente.primerApellido : this.state.primerApellido;
        let segundoApellido = this.state.segundoApellido == '' && docente.segundoApellido != undefined && docente.segundoApellido != null ? docente.segundoApellido : this.state.segundoApellido;
        let fechaVinculacion = this.state.fechaVinculacion == '' && docente.fechaVinculacion != undefined && docente.fechaVinculacion != null ? docente.fechaVinculacion : this.state.fechaVinculacion;
        let correoInstitucional = this.state.correoInstitucional == '' && docente.correoInstitucional != undefined && docente.correoInstitucional != null ? docente.correoInstitucional : this.state.correoInstitucional;
        let correoPersonal = this.state.correoPersonal == '' && docente.correoPersonal != undefined && docente.correoPersonal != null ? docente.correoPersonal : this.state.correoPersonal;
        let tituloMasAlto = this.state.tituloMasAlto == '' && docente.tituloMasAlto != undefined && docente.tituloMasAlto != null ? docente.tituloMasAlto : this.state.tituloMasAlto;
        let material = docente.materialDocenteList != undefined && docente.materialDocenteList != null ? docente.materialDocenteList : [];
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Crear docente
                </Button>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
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
                                            value={tipoDocumento}
                                            onChange={this.handleChange}
                                            margin="dense"
                                            variant="outlined"
                                        >
                                            {
                                                arrayDocs.map(d => (


                                                    <MenuItem key={d.idTipoDocumento} value={d.idTipoDocumento}>
                                                        {d.nombreTipoDocumento}
                                                    </MenuItem>

                                                ))
                                            }
                                        </SelectText>
                                        <TextField
                                            id="outlined-name"
                                            label="Numero de documento"
                                            margin="dense"
                                            variant="outlined"
                                            name="numeroDocumento"
                                            value={numeroDocumento}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Nombre"
                                            margin="dense"
                                            variant="outlined"
                                            name="nombre"
                                            value={nombre}
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
                                            value={primerApellido}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Segundo apellido"
                                            margin="dense"
                                            variant="outlined"
                                            name="segundoApellido"
                                            value={segundoApellido}
                                            onChange={this.handleChange}
                                        />
                                        <SelectDate
                                            id="date"
                                            label="Fecha vinculacion"
                                            type="date"
                                            margin="dense"
                                            variant="outlined"
                                            name="fechaVinculacion"
                                            value={fechaVinculacion}
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
                                            value={correoInstitucional}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Correo peronal"
                                            margin="dense"
                                            variant="outlined"
                                            name="correoPersonal"
                                            value={correoPersonal}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Titulo mas alto"
                                            margin="dense"
                                            variant="outlined"
                                            name="tituloMasAlto"
                                            value={tituloMasAlto}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Paper>
                                <Grid item xs={12}>
                                    <ListMaterial materialActualizar={material} />
                                </Grid>
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
        listTipoDocs: () => {
            dispatch(listAllTipoDoc());
        },
        openModal: (open) => {
            dispatch(openModal(open));
        }
    };
};

const mapStateToProps = state => {
    console.log("state", state);
    return {
        docs: state.tipoDocs,
        listMateria: state.docentes.listMaterial,
        docente: state.docentes.docente,
        open: state.docentes.open
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CrearDocente);
