import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { saveTipoDoc } from './actions';
import { connect } from 'react-redux';

class TipoDocumento extends Component {

    state = {
        nombreTipoDoc: ''
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
            title: '',
            body: ''
        });
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div><TextField
                    id="outlined-name"
                    label="Name"
                    value={this.state.nombreTipoDoc}
                    onChange={this.handleInputChange}
                    margin="normal"
                    variant="outlined"
                    name="nombreTipoDoc"
                /></div>

                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Guardar
                    </Button>
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        addTipoDoc: tipoDoc => {
            dispatch(saveTipoDoc(tipoDoc));
        }
    };
};

export default connect(null,mapDispatchToProps)(TipoDocumento);