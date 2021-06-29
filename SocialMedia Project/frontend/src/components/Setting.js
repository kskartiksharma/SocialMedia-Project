import React from 'react'
import './Setting.css'
import Navbar2 from "./Navbar2";
import { Footer } from "./Footer";
export const Setting = () => {
    return (
        <div>
        <Navbar2/>
        <div className="Settingbody">
            <h1>To go on MainPage</h1>
            <p  className="paraSize">Click on Talkzie on Navbar</p>
<br/>
            <h1>To see the Post</h1>
            <p  className="paraSize">Click on My feeds on Sidebar</p>
            <br/>
            <h1>To go on Chat</h1>
            <p  className="paraSize">Click on Chat on Sidebar</p>
            <br/>
            <h1>To Logout</h1>
            <p  className="paraSize">Click on Logout and you will reach to the Homepage of this Application</p>
        </div>
        <Footer/>
        </div>
    )
}
