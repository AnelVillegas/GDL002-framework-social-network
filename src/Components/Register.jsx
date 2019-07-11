import React, {Component} from 'react';
import { Button, Form, CardDeck, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class Register extends Component {

    constructor(){
      super();
      this.state ={
          name:'',
          lastName:'',
          email :'',
          password :'',

      }
      this.handleInputChange=this.handleInputChange.bind(this);
      this.registerNewUser=this.registerNewUser.bind(this);
    }

    handleInputChange = (event) => {
      console.log(event.target.name);
      this.setState({
         [event.target.id] : event.target.value
      });
    }

   

    registerNewUser(e){
      e.preventDefault();
      console.log(this.state);
     const {name, lastName, email, password}= this.state;
     firebase.auth().createUserWithEmailAndPassword(email, password)
    .then ((user) => {
      this.props.history.push('/');
    })
    
  .catch((error)=> {
      this.setState({error:error});
      });
};

    
    render (){
      const colStyle = { maxWidth: "22rem" };
      const{name, lastName, email, password} = this.state;
    return(
    <div className = "main-content">
    
    
    <CardDeck className="carddeck" style={colStyle}>
    
    <Card className="register">
    <div className="cardregister">
        
        REGISTRATE 
        
        <Card.Body>
        <Form className="rectangle" onSubmit={this.registerNewUser}>
          <Form.Group controlId="name">
            <Form.Label >Nombre</Form.Label>
            <Form.Control type="name" value={name} onChange={this.handleInputChange} placeholder="Escribe tu nombre" />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="lastname" value={lastName} onChange={this.handleInputChange} placeholder="Escribe tus apellidos" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={this.handleInputChange} placeholder="Correo electrónico" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Constraseña</Form.Label>
            <Form.Control type="password" value={password} onChange={this.handleInputChange} placeholder="Contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">Ingresar</Button>
        </Form>
        </Card.Body>
    </div> 
    </Card>
    </CardDeck>

    
    </div>
    )
    }
  }

export default Register;