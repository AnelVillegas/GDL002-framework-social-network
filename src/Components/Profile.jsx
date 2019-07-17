import React, {Component} from "react";
import NavbarComponents from './NavbarComponents';

class Profile extends Component{
    constructor(){
        super();

        this.state = {
            posts :[]

        }

    }

    render(){
        return(
            <div>
                <NavbarComponents/>
                HOLA
            </div>
        )
    }
}

export default Profile; 