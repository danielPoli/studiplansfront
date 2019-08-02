import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import { Grid, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FacultadModal from './FacultadModal';

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

class Facultad extends Component {

    
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FacultadModal/>
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
                                {/* {listDocs.map((docs, i) => {
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
                                    })} */}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}


export default Facultad;
