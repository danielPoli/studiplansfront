import React, { Component } from 'react';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiPaper from '@material-ui/core/Paper';
import AddMaterial from './AddMaterialDialog';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

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

class ListMaterial extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const { materialDocente, materialActualizar } = this.props;
        
        let materialList = materialDocente.listMaterial  != '' ? materialDocente.listMaterial: materialActualizar;
        return (
            <div >
                <AddMaterial />
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Descripcion</TableCell>
                                <TableCell >Link material</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {materialList.map(m => (
                                <TableRow key={m.descripcion}>
                                    <TableCell component="th" scope="row">
                                        {m.descripcion}
                                    </TableCell>
                                    <TableCell >{m.link_material_adicional}</TableCell>
                                </TableRow>
                            ))}
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
        materialDocente: state.docentes,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMaterial);