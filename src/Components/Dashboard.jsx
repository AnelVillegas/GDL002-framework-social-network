import React, {Component} from "react";
import CreatePost from './CreatePost';
import NavbarComponents from './NavbarComponents';
import firebase from './Firebase';

class Dashboard extends Component{

componentWillReceiveProps(){
    const userDB = this.props.user
    const userStructure = { 
        uid: userDB.uid,
        name: userDB.displayName,
        email: userDB.email,
        photo: userDB.photoURL
     }
     if(userDB.uid === undefined){
         console.log("no");
    }else{
        const userRef = firebase.database().ref("users/" + userDB.uid);
        userRef.set(userStructure);
    }
}
    
    render(){
        const  infoUser = this.props.user
        return(
            <div>
                <NavbarComponents/>
                <br/>
                <CreatePost infoUser = {infoUser}/>
                <br/>
                {/*<showPost infoUser = {infoUser}/>*/}
            </div>
        )
    }
    
    
}

export default Dashboard;
