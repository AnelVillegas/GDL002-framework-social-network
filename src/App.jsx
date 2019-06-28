import React, {Component} from 'react';
import Home from './Components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import firebase from './Components/Firebase';

class App extends Component {
constructor() {
  super() 
  this.state = {

    logged: {},
  };
this.listener=this.listener.bind(this);
}

 componentDidMount(){
   this.listener();
 } 

 listener(){
   firebase.auth().onAuthStateChanged((logged) => {
    console.log(logged);
     logged ? this.setState({ logged: true }) : this.setState({ logged: false});
   });
 }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
      <Route exact path="/" render={() => this.state.logged ? (<Dashboard logged={this.state.logged}/>):(<Home/>)}/>
      <Route exact path="/Profile" render={() => <Profile logged = {this.state.logged} objectUser = {this.state.logged}/>}/>
      </Switch>


      
      </div>
    </BrowserRouter>
    )
  }
  
    
  
}

export default App;
