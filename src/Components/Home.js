import React, {Fragment, Component} from 'react';
import HomeNavbar from './HomeNavbar';
import { Button, Form, CardDeck, Card } from 'react-bootstrap';
import './Home.css';
import runners from '../Images/runners.jpg';

const myStyles={
    backgroundImage: `url( ${runners} )`,
    backgroundRepeat: `norepeat`,
    backgroundSize: `cover`,
}

class Home extends Component {

    render () {
    return(
    <div className = "main-content"style= {myStyles}>
    <HomeNavbar title="Runners Today"/>
    <div className="home-image">imagen aqui</div>
    
    <CardDeck className="carddeck">
    <Card className="signin" >
    <div >
        INICIA SESION 
        <Card.Body>
        <Form className="rectangle">
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="Iniciar Sesión">Submit</Button>
        </Form>
        </Card.Body>
    </div>
    </Card>
    <Card>
    <div className="register">
        REGISTRATE 
        
        <Card.Body>
        <Form className="rectangle">
        <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Escribe tu nombre" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="lastname" placeholder="Escribe tus apellidos" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Constraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </Card.Body>
    </div> 
    </Card>
    </CardDeck>
    </div>
    )
    }
}
    
    export default Home;