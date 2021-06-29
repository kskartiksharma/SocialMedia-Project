import React from 'react'
import './Chat.css'
import Navbar2 from "./Navbar2";
import { Footer } from "./Footer";

export const Chat = () => {
    return (
        <div>
        <Navbar2/>
            <br/>
        <div class="container">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="Avatar">
        </img>
        <p>Hello. How are you today?</p>
        <span class="time-right">11:00</span>
      </div>
      
      <div class="container darker">
        <img src="https://i.natgeofe.com/n/80b97fe3-c0fb-40a6-a6a6-88b5c3bb9d30/01-lion-populations-nationalgeographic_1777804.jpg" alt="Avatar" class="right">
        </img>
        <p>Hey! I'm fine. Thanks for asking!</p>
        <span class="time-left">11:01</span>
      </div>
      
      <div class="container">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="Avatar">
        </img>
        <p>Sweet! So, what do you wanna do today?</p>
        <span class="time-right">11:02</span>
      </div>
      
      <div class="container darker">
        <img src="https://i.natgeofe.com/n/80b97fe3-c0fb-40a6-a6a6-88b5c3bb9d30/01-lion-populations-nationalgeographic_1777804.jpg" alt="Avatar" class="right">
        </img>
        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
        <span class="time-left">11:05</span>
      </div>
      <br/>
      <Footer/>
        </div>
    )
}
