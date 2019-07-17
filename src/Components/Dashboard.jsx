import React, {Component} from "react";
import CreatePost from './CreatePost';
import NavbarComponents from './NavbarComponents';
import firebase from './Firebase';
import ShowPost from "./ShowPost";

class Dashboard extends Component{

componentWillReceiveProps(){
    const userDB = this.props.logged
    const userStructure = { 
        uid: userDB.uid,
        name: userDB.displayName,
        email: userDB.email,
        // photo: userDB.photoURL
     }
     if(userStructure.uid === undefined){
         console.log("no");
    }else{
        const userRef = firebase.database().ref("users/" + userDB.uid);
        userRef.set(userStructure);
    }
}
    
    render(){
        console.log(this.props.logged)
        const  infoUser = this.props.logged
        return(
            <div>
                <NavbarComponents/>
                <br/>
                <CreatePost infoUser = {infoUser}/>
                <br/>
                <ShowPost infoUser = {infoUser}/>
            </div>
        )
    }
    
    
}

export default Dashboard;
