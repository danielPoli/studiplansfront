import { listAllTipoDoc } from "./actions";
import { Component } from "react";
import React from 'react';
import { connect } from 'react-redux';

class ListTipoDoc extends Component{
    
    componentDidMount(){
        const {listTipoDocs}= this.props;
        listTipoDocs();      
      }

      constructor(props){
        super(props);
        
      
      }
    
    render(){
    const {tipoDocs} = this.props
    const listDocs = tipoDocs.docs == undefined ? []:tipoDocs.docs;
debugger
        return(
            <div>
                
                {listDocs.map((docs, i) =>{
                      return <div>{docs.nombreTipoDocumento}</div>             
                })}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listTipoDocs:()=>{
            dispatch(listAllTipoDoc());
        }
    };
};

const mapStateToProps = store =>{
    return{
        tipoDocs : store.tipoDocs
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ListTipoDoc);