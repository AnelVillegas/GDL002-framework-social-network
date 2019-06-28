import React, {Component} from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from  'react-bootstrap/FormControl';
import NavbarComponents from '../NavbarComponents';

class Dashboard extends Component{

    constructor(){
        super()
    }

    
    render(){
        return(
            <div>
                <NavbarComponents />
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Publica Algo</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
            </div>
        )
    }
    
    
}

export default Dashboard;
