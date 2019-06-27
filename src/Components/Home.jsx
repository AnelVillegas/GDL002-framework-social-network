import React, {Component} from 'react';
import HomeNavbar from './HomeNavbar';
import './Home.css';
import road from '../Images/background.jpg';
import LogIn from './LogIn';
import Register from './Register';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const myStyles={
    backgroundImage: `url( ${road} )`,
    backgroundAttachment: `fixed`,
    backgroundRepeat: `norepeat`,
    backgroundSize: `cover`,
    backgroundPosition:`center`,
}

class Home extends Component {
  render(){
    return (
      <div className="container-fluid imgBackground" className = "main-content"style= {myStyles}>
    <HomeNavbar title="Runners Today"/>
    
     <Container>

     <Row>
    <Col xs={8} sm={10}><LogIn/> </Col>
    
    <Col xs={8} sm={10}><Register/> </Col>
     </Row>
     </Container>
      
      <div className="welcome">CORRER ES UN PRIVILEGIO</div>
    </div>
    )
  }

}

    export default Home;