import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {hashHistory} from 'react-router';
import Details from './components/Details';
import SignIn from './components/LandingPage/SignIn';

class App extends Component {

 

  render() {
    
    return (
      
        // <div className="row" style={{margin:"15px"}}>
        //   <Card />
        //   <Card/>
        //   <Card/>
        //   <Card/>
        // </div>

      <Router >
        <div>
          <Route exact path='/' component={Card  } />
          <Route path='/details/' component={Details} />
          <Route path='/signin/' component={SignIn} />
       </div>
        
      </Router>
     
      
    );
  }
}

export default App;
