import React, {Component} from "react";
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import firebase from './Firebase';
import {Link} from 'react-router-dom';


class NavbarComponents extends Component{

    constructor(props){
        super(props)
        this.logOut = this.logOut.bind(this);
    }
    logOut(e) {
      e.preventDefault ();
         firebase.auth().signOut().then(function(){
             console.log('sesión cerrada')
          }).catch(function(error) {
              console.log(error)
         });
            }

        render(){
                return(

            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href="#home"> Runners Today </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Profile">Perfil</Nav.Link>
                        <Nav.Link href="/Dashboard" exact>Inicio</Nav.Link>
                        <Nav.Link onClick={this.logOut}><Link to="/"/>Salir</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavbarComponents;