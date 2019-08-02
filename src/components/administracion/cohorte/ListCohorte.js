import React, { Component } from 'react';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { listAllCohorte } from './actions';

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

class ListCohorte extends Component {

    
    componentDidMount(){
        const {cohortes} = this.props;
        cohortes();
    }

    render() {
        const { listCohortes } = this.props;
        
        return (
            <React.Fragment>
                {/* <AddContenido /> */}
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha inicio</TableCell>
                                <TableCell >fecha fin</TableCell>
                                <TableCell >publicado</TableCell>
                                <TableCell >Accions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listCohortes.map(c => (
                                <TableRow key={c.idCohorte}>
                                    <TableCell component="th" scope="row">
                                        {c.fechaInicioCohorte}
                                    </TableCell>
                                    <TableCell >{c.fechaFinCohorte}</TableCell>
                                    <TableCell >{c.publicado}</TableCell>
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
        listCohortes: state.cohorte.listCohorte,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        cohortes:()=>{
            dispatch(listAllCohorte());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCohorte);
