import React, { Component } from 'react';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AddContenido from './AddContenido';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

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

class ListContenido extends Component {

    render() {
        const { contenido, contenidoModulo } = this.props;
        console.log("contenido", contenido);
        let listContenido = contenido.listContenido != '' ? contenido.listContenido : contenidoModulo;
        return (
            <React.Fragment>
                <AddContenido />
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Unidad</TableCell>
                                <TableCell >Descripcion</TableCell>
                                <TableCell >Vigencia</TableCell>
                                <TableCell >Accions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listContenido.map(c => (
                                <TableRow key={c.numUnidad}>
                                    <TableCell component="th" scope="row">
                                        {c.numUnidad}
                                    </TableCell>
                                    <TableCell >{c.descripcionUnidad}</TableCell>
                                    <TableCell >{c.vigenciaContenido}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label="Edit" component='a' >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        contenido: state.modulos,
    }
}
export default connect(mapStateToProps, null)(ListContenido);
