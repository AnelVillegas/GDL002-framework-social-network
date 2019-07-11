import React, {Component} from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from  'react-bootstrap/FormControl';
import Button from  'react-bootstrap/Button';
import  moment from "moment";
import firebase from './Firebase';


class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state={
            messagePost:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.sendPostToFirebase = this.sendPostToFirebase.bind(this);
    }

        handleChange(e){
            this.setState({
                [e.target.id] : e.target.value,
        });
    }

    sendPostToFirebase(e){
        e.preventDefault();
        const userId = firebase.auth().currentUser.uid;
        const user = firebase.auth().currentUser;
        const userName = user.displayName;
        //const photo = user.photoUrl;
        const date = moment().format('lll');
        const postKey = firebase.database().ref("users/"+userId).child("post").push().key;
        const post = {
            author: userName,
            content: this.state.messagePost,
            date,
           // photo,
            id: postKey
        }; 
    let updates = {}; //actualizaciones del post en las ramas en las q se debe almacenar para mostrarse en su respectivo componente
    updates ['/post/'+ postKey] = post;
    updates ['/user-post/' + userId + '/' + postKey ] = post; //la diagonal unduca q se meta a esa rama pero como postkey cambia se indica q se concatene esa diagonal con el postkey
    firebase.database().ref().update(updates);
    this.setState({messagePost:""});


        }        



     render(){
       return(

            <div>
               <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Escribe una publicación"
                    aria-label="Escribe una publicación"
                    aria-describedby="basic-addon2"
                    id="messagePost"
                    onChange={this.handleChange}
                    />
                    <InputGroup.Append >
                    <Button onClick={this.sendPostToFirebase}>Postear</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>   
      ) 
    }
}




export default CreatePost;