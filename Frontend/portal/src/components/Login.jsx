import { Link } from "react-router-dom";
import React from "react";
import "./LoginBox.css";
import "./Forgotpassword";


const Login = () => {
  return (
    <div className="container">
      <div className="LoginBox">
        <div className="divider">
          <h1 className="LoginFont">Login</h1>
        </div>
        <form>
          <input type="email" placeholder="Email address" className="input-field boxwidth" required />
          
          <input type="password" placeholder="Password" className="input-field boxwidth" required />
          <Link to="/Forgotpassword" style={{ color: "#6c63ff"}}>
              Forgot password?
          </Link>
          <br />
        <button type="submit" className="submit-button">Continue</button>
        </form>
      </div>
      <div className="img"></div>
    </div>
   );
};

export default Login;