import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SignIn() {
  const navigate = useNavigate();
  var [Login, setLogin] = useState({
    userId: 0,
    password: "",
  });
  var login = () => {
    fetch("http://localhost:5066/api/User", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Login }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("userId", myData.userId); 
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        console.log(myData);
        if (myData.role === "Patient") {
          localStorage.setItem("userId", myData.userId);
          navigate("/patientdashboard");
        } else if (myData.role === "Doctor") {
          navigate("/doctordashboard");
        } else if (myData.role === "Admin") {
          navigate("/adminpage");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };


  return (
    <div className='whole'>
      <div className="overlay">
        <div className='form'>
          <div className="cons">
            <header className="head-form">
              <h2>Login</h2>
              <p>Login here to get access!</p>
            </header>
            <br />
            <div className="field-set">
              <span className="input-ite">
                <i className="fa fa-user-circle"></i>
              </span>
              <input
                className="form-input"
                id="txt-input"
                type="number"
                placeholder="UserId"
                required
                onChange={(event) => {
                  setLogin({
                    ...Login,
                    "userId": event.target.value,
                  });
                }}
              />
              <br />
              <span className="input-ite">
                <i className="fa fa-key"></i>
              </span>
              <br></br>
              <input
                className="form-input"
                type="text"
                placeholder="Password"
                id="pwd"
                name="password"
                required
                onChange={(event) => {
                  setLogin({
                    ...Login,
                    "password": event.target.value,
                  });
                }}
              />
              <br /><br />
              <button className="log-in" onClick={login}>log In</button>
            </div><br></br><br></br><br />
            <br />
            <div className="other"><br />
             
            </div>
            <div className="btn submits sign-up" >
                <Link to="/registerhome"><p> <h4>Dont have an account</h4><h4>Signup</h4></p></Link>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
