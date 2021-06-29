import React from 'react'
import Navbar2 from "./Navbar2";
import Sidebar from "./Sidebar";
import './Post.css'
import { Footer } from "./Footer";

export const Post = () => {
    return (
        <div className="mainbody">
        <Navbar2/>
    
       
    <div className="card postbody" style={{width: 30+'rem',height: 35+'rem'}}>
    <h2>MasterChiefAmerica </h2>
  <img src="http://www.hergamut.in/wp-content/uploads/2016/02/Cooking-Tips01.jpg" class="card-img-top" alt="...">
  </img>
  <div class="card-body">
    <p class="card-text"> <button className="heart"><i className="fas fa-heart "></i></button>
    <button className="comment"><i className="far fa-comment-alt "></i></button></p>
  </div>
</div>
<br/>
<div className="card postbody" style={{width: 30+'rem',height: 50+'rem'}}>
    <h2>Verma_paremesh </h2>
  <img src="https://tse2.mm.bing.net/th?id=OIP.Fajwds-Vf4czv0WVZWR6MQHaJQ&pid=Api&P=0&w=300&h=300" class="card-img-top" alt="...">
  </img>
  <div class="card-body">
    <p class="card-text"> <button className="heart"><i className="fas fa-heart "></i></button>
    <button className="comment"><i className="far fa-comment-alt "></i></button></p>
  </div>
</div>
<br/>
<div className="card postbody" style={{width: 30+'rem',height: 30+'rem'}}>
    <h2>Mr.GrEy</h2>
  <img src="https://imgix.bustle.com/inverse/a7/ca/ec/94/e372/4a2e/819b/c2aa890c9677/grey1jpg.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg" alt="joey" class="card-img-top" alt="...">
  </img>
  <div class="card-body">
    <p class="card-text"> <button className="heart"><i className="fas fa-heart "></i></button>
    <button className="comment"><i className="far fa-comment-alt "></i></button></p>
  </div>
</div>
<br/>
<div className="card postbody" style={{width: 30+'rem',height: 50+'rem'}}>
    <h2>Chandler.bing</h2>
  <img src="https://tse2.mm.bing.net/th?id=OIP.yzP3SLmc-c4LLOWXo2Un_gHaKP&pid=Api&P=0&w=300&h=300" class="card-img-top" alt="...">
  </img>
  <div class="card-body">
    <p class="card-text"> <button className="heart"><i className="fas fa-heart "></i></button>
    <button className="comment"><i className="far fa-comment-alt "></i></button></p>
  </div>
</div>
<br/>
<div className="card postbody" style={{width: 30+'rem',height: 50+'rem'}}>
    <h2>Itz..Kia</h2>
  <img src="https://tse4.mm.bing.net/th?id=OIP._0ZqG5drK1D7F4-0_5uBBgHaI9&pid=Api&P=0&w=300&h=300" alt="...">
  </img>
  <div class="card-body">
    <p class="card-text"> <button className="heart"><i className="fas fa-heart "></i></button>
    <button className="comment"><i className="far fa-comment-alt "></i></button></p>
  </div>
</div>
<br/>
<Footer/>
        </div>
    )
}
