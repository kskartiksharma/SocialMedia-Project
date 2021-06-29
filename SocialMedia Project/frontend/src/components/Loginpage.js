import React from 'react'
import './Loginpage.css'
import { Link } from "react-router-dom";
import Axios from "axios"

class Login extends React.Component {
  state = { user: {} };

  onSubmitClick = async (event) => {
      event.preventDefault();
      await Axios.post("http://localhost:3002/user/Login", this.state.user)
      .then((response) => {
          console.info(response);
      }).catch((error) => {
          console.error(error);
      });
  };

  render() {
  return (
    <div className="loginbody">
    <p className="heading">
    Login to Talkzie
</p>
<div id="box1">
    <form>
           <div id="label">
                  <label for="username">Username or email address</label><br /><br />
                  <input type="username" name="username" id="username" onChange = {(e) => {
                    this.setState({user: {...this.state.user, email: e.target.value }})
                     }}/><br />
                  <br />
                  <br />
                  <label for="password">Password</label>

                  
                  <input type="password" name="username" id="username" onChange = {(e) => {
                    this.setState({user:{...this.state.user, password: e.target.value }})
                 }} /><br />
           </div>
    </form>
    <button type="login" onClick={this.onSubmitClick}> <Link className= "white" to="/MainPage">Login</Link></button>
</div>
<div id="box2">
    <h5>New to Talkzie?<br/><Link to="/Signup" id="a2">Create an account.</Link></h5>
</div>

</div>
    
  )
}
}

export default Login;