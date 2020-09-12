import React from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import {Button} from 'react-bootstrap';
import '../styles/index.css';

const signup = ()=>{

    return(
        <div className="container">
            <div className="signupCointer">
            <Tabs>
            <Tab label="Sign Up">
              <div>
                   <h1>Sign Up for free</h1>
                   <div className="flexRow">
                        <input placeholder="firstName *"/>
                        <input placeholder="lastName *"/>
                   </div>
                   <div className="flexColumn">
                        <input placeholder="email Address *"/>
                        <input placeholder="set a password *"/>
                   </div>
                   <div className="btnPos">
                       <Button className="btnPreview btn_Button">Get Started</Button>
                   </div>
               </div>
            </Tab>
            <Tab label="Login">
               <div>
                   <h1>Please login here</h1>
                   <div className="flexColumn">
                        <input placeholder="email Address *"/>
                        <input placeholder="set a password *"/>
                   </div>
                   <div className="btnPos">
                       <Button className="btnBorrow btn-cart">login</Button>
                   </div>
               </div>
            </Tab>
            
            </Tabs>
            </div>
        </div>
    )
}

export  default signup;