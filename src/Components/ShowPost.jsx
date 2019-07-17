import React, {Component, Fragment} from "react";
import firebase from './Firebase';
import { Button, Card } from 'react-bootstrap';
import Dashboard from './Dashboard';

class ShowPost extends Component{

    constructor(props){
        super(props);
        this.state={
            posts: []
        }
    }

 componentWillMount(){
     function dashboard(snapshot){ 
         let posts = []

         snapshot.forEach(post=> {
             const items = post.val();
             posts.unshift(items)//para mostrar del mas nuevo al mas viejo
         });
         return posts
     }
     const  dbPostsRef = firebase.database().ref().child("post/");
        dbPostsRef.on('value', snapshot =>{
            const postForArray = dashboard(snapshot);
            console.log(postForArray)
                this.setState({
                    posts: postForArray
                })
        }) 
 }   

 render(){
     console.log(this.state.posts)
     return(
        <div> 
         {this.state.posts.map((post, i) =>
        <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={post.photo} />
            <Card.Body>
                <Card.Title>{post.author}</Card.Title>
                <Card.Text>
                {post.content}
                </Card.Text>
                <Button variant="primary">Eliminar</Button>
            </Card.Body>
            </Card>
            )}
        </div>
    
    )
 }
}


export default ShowPost