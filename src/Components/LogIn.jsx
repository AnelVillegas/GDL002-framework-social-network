import React, {Component} from 'react';
import { Button, Form, CardDeck, Card, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class LogIn extends Component {

    constructor(){
      super();
      this.state ={
          email :'',
          password :'',

      };

      this.handleInputChange=this.handleInputChange.bind(this);
      this.login=this.login.bind(this);
    };

    handleInputChange = (event) => {
      this.setState({
      [event.target.id] : event.target.value,
      })
    };

    login(event){
    event.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

    .catch((error) => {
        this.setState ({error:error});
        console.log(error);
          });
    }
    
      render () {
        const colStyle = { maxWidth: "22rem" };
        const {email, password} = this.state;
    return(
      
    <div className = "main-content">
    
    
    <CardDeck className="carddeck" style={colStyle}>
    <Card className="signin" >
    <div className= "cardsignin">
        INICIA SESION 
        <Card.Body>
        <Form className="rectangle">
          <Form.Group controlId="signInEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  type="email" placeholder="Correo electrónico" id="email" onChange={this.handleInputChange}/>
          </Form.Group>
          <Form.Group controlId="signInPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" id="password" onChange={this.handleInputChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.login}>Ingresar</Button>
        </Form>
        </Card.Body>
    </div>
    </Card>
    
        
    </CardDeck>

    </div>
    
    )
    }
}
export default LogIn;