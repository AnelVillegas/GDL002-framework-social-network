import React, {Fragment, Component} from 'react';
import { Button, Form, CardDeck, Card } from 'react-bootstrap';
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

    login(event) {
    event.preventDefault();
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.props.history.push('/');
    })

    .catch((error) => {
        this.setState ({error:error});
      });
    }
    
      render () {
        const colStyle = { maxWidth: "22rem" };
        const {email,password} = this.state;
    return(
      
    <div className = "main-content">
    
    
    <CardDeck className="carddeck" style={colStyle}>
    <Card className="signin" >
    <div className= "cardsignin">
        INICIA SESION 
        <Card.Body>
        <Form className="rectangle"onSubmit={this.login} >
          <Form.Group controlId="signInEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  onChange={this.handleInputChange} placeholder="Correo electrónico" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="signInPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password"  onChange={this.handleInputChange} placeholder="Contraseña" />
          </Form.Group>
          {/*<Form.Group controlId="signInCheck">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>*/}
          <Button variant="primary" type="Iniciar Sesión">Ingresar</Button>
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