import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import './SignIn.css'

export default class SignIn extends Component{
    render(){
        return(
        <div>
            <form action="action_page.php" style={{border:1 ,borderBlock:'solid' ,borderColor:'#ccc'}}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label forHtml="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                    <label>{
                        //checked="checked"
                    }
                        
                    <input type="checkbox"  name="remember" style={{marginBottom:15}}/> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms  Privacy</a>.</p>

                    {/* <div className="clearfix"> */}
                    
                    <button type="submit" className="signupbtn">Sign Up</button>
                    <button type="button" className="cancelbtn">Cancel</button>
                    {/* </div> */}
                </div>
            </form> 
        </div>
        )
    }
}