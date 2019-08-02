import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { saveTipoDoc, listAllTipoDoc } from './actions';
import { connect } from 'react-redux';
import { Grid, IconButton } from '@material-ui/core';
import MuiPaper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';

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
class TipoDocumento extends Component {

    state = {
        nombreTipoDoc: ''
    }

    componentDidMount() {
        const { listTipoDocs } = this.props;
        listTipoDocs();
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.nombreTipoDoc.trim()) {
            this.props.addTipoDoc(this.state)
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            nombreTipoDoc: '',
            
        });
    };

    render() {
        const { tipoDocs } = this.props
        const listDocs = tipoDocs.docs == undefined ? [] : tipoDocs.docs;
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <PaperForm>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                value={this.state.nombreTipoDoc}
                                onChange={this.handleInputChange}
                                margin="normal"
                                variant="outlined"
                                name="nombreTipoDoc"
                            />
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Guardar
                                </Button>
                            </Grid>
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
                                    {listDocs.map((docs, i) => {
                                        return (
                                            <TableRow>
                                                <TableCell align="left">{docs.nombreTipoDocumento}</TableCell>
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
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addTipoDoc: tipoDoc => {
            dispatch(saveTipoDoc(tipoDoc));
        },
        listTipoDocs: () => {
            dispatch(listAllTipoDoc());
        }
    };
};

const mapStateToProps = store => {
    return {
        tipoDocs: store.tipoDocs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TipoDocumento);