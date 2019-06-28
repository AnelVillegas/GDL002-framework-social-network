import React, {Component} from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import firebase from './Firebase';
import {Link} from 'react-router-dom';


class NavbarComponents extends Component{

    constructor(){
        super()
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
        <Navbar.Brand href="#home">Runners Today</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to= "/Profile"/>Perfil</Nav.Link>
            <Nav.Link><Link to= "/Dashboard"/>Inicio</Nav.Link>
            <Nav.Link onClick={this.logOut}><Link to="/"/>Salir</Nav.Link>
            {/*<NavDropdown title="Acciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Configuración</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
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