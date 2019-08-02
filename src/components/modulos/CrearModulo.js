import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import MuiTextField from "@material-ui/core/TextField";
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
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

import { saveModulo, openModal } from './actions';
import ListContenido from './ListContenido';
import { listAllSemestre } from '../administracion/semestre/actions';
import { listAllCohorte } from '../administracion/cohorte/actions';

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
const SelectCohorte = withStyles((theme) => ({
    root: {
        minWidth: 240,
        marginRight: 480
    }
}))(TextField);

class CrearModulo extends Component {

    state = {
        open: false,
        nombre: '',
        modalidad: '',
        horasTrabajoPre: '',
        horasTrabajoAse: '',
        horasTrabajoIndi: '',
        creditos: '',
        semestre: '',
        prerrequisito: '',
        correquisito: '',
        actoAdministrativo: '',
        vigenciaDesde: '',
        vigenciaHasta: '',
        cohorte: '',
    };

    handleClickOpen = () => {
        const { openModal } = this.props
        openModal(true);
    };

    handleClose = () => {
        const { openModal } = this.props
        openModal(false);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        const { saveModulo, contenido, modulo } = this.props;
        e.preventDefault();
        const jsonModulo = {
            "idModulo": modulo != undefined && modulo != null ? modulo.idModulo : '',
            "nombreModulo": this.state.nombre,
            "modalidadModulo": this.state.modalidad,
            "horasTrabajoPresenciales": this.state.horasTrabajoPre,
            "horasTrabajoAsesoria": this.state.horasTrabajoAse,
            "horasTrabajoIndependiente": this.state.horasTrabajoIndi,
            "creditosModulo": this.state.creditos,
            "semestre": {
                "idSemestre": this.state.semestre
            },
            "prerrequisito": {
                "idModulo": this.state.prerrequisito
            },
            "correquisito": {
                "idModulo": this.state.correquisito
            },
            "actoAdministrativo": this.state.actoAdministrativo,
            "vigenciaDesde": this.state.vigenciaDesde,
            "cohorte": {
                "idCohorte": 1
            },
            "contenido_modulo": contenido,
            "vigenciaHasta": this.state.vigenciaHasta
        }
        console.log("jsonModulo",jsonModulo);
        saveModulo(jsonModulo);
    }

    componentDidMount() {
        const { semestres, cohorte } = this.props;
        semestres();
        cohorte();
    }

    render() {
        const { listSemestres, listModulos, open, modulo } = this.props;
        console.log("modulo", modulo);
        let nombre = this.state.nombre == '' && modulo.nombreModulo != undefined && modulo.nombreModulo != null ? modulo.nombreModulo : this.state.nombre;
        let modalidadModulo = this.state.modalidad == '' && modulo.modalidadModulo != undefined && modulo.modalidadModulo != null ? modulo.modalidadModulo : this.state.modalidad;
        let horasTrabajoPresenciales = this.state.horasTrabajoPre == '' && modulo.horasTrabajoPresenciales != undefined && modulo.horasTrabajoPresenciales != null ? modulo.horasTrabajoPresenciales : this.state.horasTrabajoPre;
        let horasTrabajoAsesoria = this.state.horasTrabajoAse == '' && modulo.horasTrabajoAsesoria != undefined && modulo.horasTrabajoAsesoria != null ? modulo.horasTrabajoAsesoria : this.state.horasTrabajoAse;
        let horasTrabajoIndependiente = this.state.horasTrabajoIndi == '' && modulo.horasTrabajoIndependiente != undefined && modulo.horasTrabajoIndependiente != null ? modulo.horasTrabajoIndependiente : this.state.horasTrabajoIndi;
        let creditosModulo = this.state.creditos == '' && modulo.creditosModulo != undefined && modulo.creditosModulo != null ? modulo.creditosModulo : this.state.creditos;
        let semestre = this.state.semestre == '' && modulo.semestre != undefined && modulo.semestre != null ? modulo.semestre.idSemestre : this.state.semestre;
        let prerequisito = this.state.prerrequisito == '' && modulo.prerrequisito != undefined && modulo.prerrequisito != null ? modulo.prerrequisito.idModulo : this.state.prerrequisito;
        let correquisito = this.state.correquisito == '' && modulo.correquisito != undefined && modulo.correquisito != null ? modulo.correquisito.idModulo : this.state.correquisito;
        let actoAdministrativo = this.state.actoAdministrativo == '' && modulo.actoAdministrativo != undefined && modulo.actoAdministrativo != null ? modulo.actoAdministrativo : this.state.actoAdministrativo;
        let vigenciaDesde = this.state.vigenciaDesde == '' && modulo.vigenciaDesde != undefined && modulo.vigenciaDesde != null ? modulo.vigenciaDesde : this.state.vigenciaDesde;
        let vigenciaHasta = this.state.vigenciaHasta == '' && modulo.VigenciaHasta != undefined && modulo.VigenciaHasta != null ? modulo.VigenciaHasta : this.state.vigenciaHasta;
        let contenidoModulo = modulo.contenido_modulo != undefined && modulo.contenido_modulo != null ? modulo.contenido_modulo : [];
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Crear modulo
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
                            Crear modulo
                        </DialogTitle>
                        <Divider />
                        <DialogContent  >
                            <Grid container spacing={2}>
                                <Paper>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Nombre"
                                            margin="dense"
                                            variant="outlined"
                                            name="nombre"
                                            value={nombre}
                                            onChange={this.handleChange}

                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Modalidad"
                                            margin="dense"
                                            variant="outlined"
                                            name="modalidad"
                                            value={modalidadModulo}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Horas trabajo presencial"
                                            margin="dense"
                                            variant="outlined"
                                            name="horasTrabajoPre"
                                            value={horasTrabajoPresenciales}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Horas trabajo asesoria"
                                            margin="dense"
                                            variant="outlined"
                                            name="horasTrabajoAse"
                                            value={horasTrabajoAsesoria}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Horas trabajo independiente"
                                            margin="dense"
                                            variant="outlined"
                                            name="horasTrabajoIndi"
                                            value={horasTrabajoIndependiente}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Creditos"
                                            margin="dense"
                                            variant="outlined"
                                            name="creditos"
                                            value={creditosModulo}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectText
                                            id="outlined-select-currency"
                                            select
                                            label="Semestre"
                                            name="semestre"
                                            value={semestre}
                                            onChange={this.handleChange}
                                            margin="dense"
                                            variant="outlined"
                                        >
                                            {
                                                listSemestres.map(s => (
                                                    <MenuItem key={s.idSemestre} value={s.idSemestre}>
                                                        {s.descripcionSemestre}
                                                    </MenuItem>
                                                ))
                                            }
                                        </SelectText>
                                        <SelectText
                                            id="outlined-select-currency"
                                            select
                                            label="Prerrequisito"
                                            name="prerrequisito"
                                            value={prerequisito}
                                            onChange={this.handleChange}
                                            margin="dense"
                                            variant="outlined"
                                        >
                                            {
                                                listModulos.map(mp => (
                                                    <MenuItem key={mp.idModulo} value={mp.idModulo}>
                                                        {mp.nombreModulo}
                                                    </MenuItem>
                                                ))
                                            }
                                        </SelectText>
                                        <SelectText
                                            id="outlined-select-currency"
                                            select
                                            label="Correquisito"
                                            name="correquisito"
                                            value={correquisito}
                                            onChange={this.handleChange}
                                            margin="dense"
                                            variant="outlined"
                                        >
                                            {
                                                listModulos.map(mc => (
                                                    <MenuItem key={mc.idModulo} value={mc.idModulo}>
                                                        {mc.nombreModulo}
                                                    </MenuItem>
                                                ))
                                            }
                                        </SelectText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-name"
                                            label="Acto administrativo"
                                            margin="dense"
                                            variant="outlined"
                                            name="actoAdministrativo"
                                            value={actoAdministrativo}
                                            onChange={this.handleChange}
                                        />
                                        <SelectDate
                                            id="date"
                                            label="Vigencia desde"
                                            type="date"
                                            margin="dense"
                                            variant="outlined"
                                            name="vigenciaDesde"
                                            value={vigenciaDesde}
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <SelectDate
                                            id="date"
                                            label="Vigencia hasta"
                                            type="date"
                                            margin="dense"
                                            variant="outlined"
                                            name="vigenciaHasta"
                                            value={vigenciaHasta}
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {/* <SelectCohorte
                                            id="outlined-select-currency"
                                            select
                                            label="Cohorte"
                                            name="cohorte"
                                            value={this.state.cohorte}
                                            onChange={this.handleChange}
                                            margin="dense"
                                            variant="outlined"
                                        >
                                            {
                                            listCohorte.map(c => (

                                                <MenuItem key={d.idTipoDocumento} value={d.idTipoDocumento}>
                                                    {d.nombreTipoDocumento}
                                                </MenuItem>

                                            ))
                                        }
                                        </SelectCohorte> */}

                                    </Grid>
                                </Paper>
                                <Grid item xs={12}>
                                    <ListContenido contenidoModulo={contenidoModulo} />
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
        saveModulo: jsonModulo => {
            dispatch(saveModulo(jsonModulo));
        },
        semestres: () => {
            dispatch(listAllSemestre());
        },
        cohorte: () => {
            dispatch(listAllCohorte());
        },
        openModal: (open) => {
            dispatch(openModal(open));
        }
    }
}

const mapStateToProps = state => {
    console.log("state", state);
    return {
        listSemestres: state.semestre.listSemestre,
        listModulos: state.modulos.listModulos,
        contenido: state.modulos.listContenido,
        listCohorte: state.cohorte.listCohorte,
        modulo: state.modulos.modulo,
        open: state.modulos.open
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearModulo)