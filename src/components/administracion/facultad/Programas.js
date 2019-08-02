import React, { Component } from 'react';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ProgramaModal from './ProgramaModal';

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
  
  const Table = withStyles(()=>({
    table: {
        minWidth: 650,
      },
  }))(MuiTable);

class Programas extends Component {


    render() {
        const { material } = this.props;
        return (
            <div >
                <ProgramaModal />
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Descripcion</TableCell>
                                <TableCell >Link material</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {material.map(m => (
                                <TableRow key={m.descripcion}>
                                    <TableCell component="th" scope="row">
                                        {m.descripcion}
                                    </TableCell>
                                    <TableCell >{m.link_material_adicional}</TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
};

const mapStateToProps = state => {
    return {
        material: state.docentes.listMaterial,
    }
}

export default connect(null, null)(Programas);