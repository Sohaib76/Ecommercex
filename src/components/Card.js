import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

import './bootstrap.css'


class Card extends Component {

  handleSearch(){
      window.location.assign('./Details.js')
  }

  render() {
    return (
      <div className="card" style={{width: "18rem", margin:"10px"}}>
        <img className="card-img-top" src="http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/10/Razer-Deathadder-Elite-logo.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Razer Deathadder Elite</h5>
            <div className="card-text">
                <ul className="container">
                    <li >True 16,000 DPI optical sensor</li>
                    <li >Up to 450 IPS/50 g acceleration</li>
                    <li>Razer Mechanical Mouse switches</li>
                </ul>
                
            </div>
            
        </div>

        <div className="container" style={{margin:"10px"}}>
            <div className="row">
                    <div className="col-md-6">
                        {/* <a href="/details" className="btn btn-primary">Details</a> */}
                        <Link to="/details/" className="btn btn-primary">Details</Link>
                    </div>
                    <div className="col-md-6">
                        <a href="#" className="btn btn-primary" >Buy</a>
                    </div>
            </div>
        </div>

    </div>

      


    );
  }
}

export default Card;
