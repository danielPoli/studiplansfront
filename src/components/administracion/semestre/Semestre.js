import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import MuiPaper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import { Grid, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {saveSemestre, listAllSemestre} from './actions';

const PaperForm = withStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
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

class Semestre extends Component{

    state = {
        nombreSemestre: ''
    }

    componentDidMount(){
        const {listSemestre}= this.props
        listSemestre();
    }

    handledChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handledSubmit = e => {
        e.preventDefault();
        const { addSemestre } = this.props
        const jsonSemestre={
            "descripcionSemestre":this.state.nombreSemestre
        }
        addSemestre(jsonSemestre);
        this.handleReset();
    }

    handleReset = () => {
        this.setState({
            nombreSemestre: ''
        });
    };

    render(){
        const {listSemestres} = this.props;
        return(
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PaperForm>
                        <form onSubmit={this.handledSubmit}>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                value={this.state.nombreSemestre}
                                onChange={this.handledChange}
                                margin="normal"
                                variant="outlined"
                                name="nombreSemestre"
                            />
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Guardar
                                </Button>
                            </Grid>
                        </form>
                    </PaperForm>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Nombre</TableCell>
                                    <TableCell align="left">Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listSemestres.map((semestre, i) => {
                                        return (
                                            <TableRow>
                                                <TableCell align="left">{semestre.descripcionSemestre}</TableCell>
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
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSemestre: jsonSemestre => {
            dispatch(saveSemestre(jsonSemestre));
        },
        listSemestre: ()=>{
            dispatch(listAllSemestre());
        }
    };
};

const mapStateToProps = store => {
    return {
        listSemestres: store.semestre.listSemestre
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Semestre);