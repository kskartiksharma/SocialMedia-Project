import React from 'react'
import "./Aboutus.css"
import { Link } from "react-router-dom";


export default function Aboutus() {
    return (
        
        
         <div className="square">
                <h1 className="title">ABOUT US</h1>
              <p  className="para">
                This app is created by using MERN.
                The MERN stack is a web development framework made up of the stack of MongoDB, Express.js, React.js, and Nodejs. 
               It is one of the several variants of the MEAN stack.
                <br/>
                <br/>
                  This app is created by :
                  <br/>
                  1.) Kartik Sharma
                  <br/>
                  <a id="one" class="mail" href="mailto:Kartik.19jics101@jietjodhpur.ac.in">Mail</a>
                  <a id="two" class="mail" href="https://github.com/kskartiksharma">GitHub link</a>
                  <br/>
                  <br/>
                  2.) Bhavika Mamnani
                  <br/>
                  <a id="one" class="mail" href="mailto:bhavika.19jics031@jietjodhpur.ac.in">Mail</a>
                  <a id="two" class="mail" href="https://github.com/Bhavika-18">GitHub link</a>
                  <br/>
                  <br/>
                  3.) Saniya Jain
                  <br/>
                  <a id="five" class="mail" href="mailto:saniyajain312@gmail.com">Mail</a>
                  <a id="six" class="mail" href="https://github.com/Saniyajain30">GitHub link</a>
                  <br/>
              </p>
        </div>

    
    )
}
