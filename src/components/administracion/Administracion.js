import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as routerLink, Route, BrowserRouter } from 'react-router-dom';
import TipoDocumento from './TipoDocumento';
import Facultad from './facultad/Facultad';
import Semestre from './semestre/Semestre';
import ListCohorte from './cohorte/ListCohorte';

class Administracion extends Component {

    state = {
        value: false
      };
    
      handleChange = (value) => {
        this.setState({ value })
      };

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <AppBar position="static">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="default"
                            fullWidth
                            aria-label="Simple tabs example">
                            <Tab label="Tipo Documento" component={routerLink} to='/tipodocumento' />
                            <Tab label="Facultad" component={routerLink} to='/facultad' />
                            <Tab label="Semestre" component={routerLink} to='/semestre' />
                            <Tab label="Cohorte" component={routerLink} to='/cohorte' />
                        </Tabs>
                    </AppBar>
                    <React.Fragment>
                        <Route exact path="/tipodocumento" component={TipoDocumento}></Route>
                        <Route exact path="/facultad" component={Facultad}></Route>
                        <Route exact path="/semestre" component={Semestre}></Route>
                        <Route exact path="/cohorte" component={ListCohorte}></Route>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Administracion;