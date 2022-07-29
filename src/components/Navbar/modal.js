
import React from "react";
import logo from './logo.svg';
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state ={
    abierto: false,
  }
  abrirModal =()=>{
     this.setState({abierto:!this.state.abierto});

  }

  render(){
    
    const modalstyles={
       position:"absolute",
       top:"50%",
       left:"50%",
       transform: 'translate(-100%,-100%)'
     }


    return(  
      <>
      <div className="principal">
         <div className ="secundario">
      <Button color = "primary" onClick={ this.abrirModal}>Ingrese su correo para confirmar</Button>
        </div></div>      
      
      
     
      <Modal isOpen ={this.state.abierto} style={modalstyles}>
        <ModalHeader>
          Correo
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <input type= "text" id="correo" placeholder="example@gmail.com"/>
           
          </FormGroup>
          
        </ModalBody>
        <ModalFooter>
             <Button color = "primary" onClick={ this.abrirModal}> Enviar</Button>
        </ModalFooter>

       </Modal>
       </> 
    )
  }
}
