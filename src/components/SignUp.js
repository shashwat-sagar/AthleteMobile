import React, { useEffect, useState } from "react";
import { firebase } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword
 
} from "./firebase";

function SignUp() {
//   const handleOnClick = async (provider) => {
//     const res = await signInWithFacebook(provider);
//     console.log(res)
//   }
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [mynumber, setNumber] = useState("");
    const [otp, setotp] = useState("");
    const [show, setshow] = useState(false);
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const [final, setfinal] = useState("");
    const history = useHistory();
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    });
    
// Sent OTP
const signup = () => {
  if (mynumber === "" || mynumber.length < 10) return;

  let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  auth
    .signInWithPhoneNumber(mynumber, verify)
    .then((result) => {
      setfinal(result);
      alert("code sent");
      setshow(true);
    })
    .catch((err) => {
      alert(err);
      window.location.reload();
    });
};

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        alert("Account Created");
        register();
        
      })
      .catch((err) => {
        alert("Wrong code");
      });
    };
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password, mynumber, age);
  };

    
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5">
            {" "}
            <span class="circle">
              <i class="fa fa-check"></i>
            </span>
            <small>
              <span id="error1" style={{ color: "red" }}></span>
            </small>
            <small>
              <span id="success" style={{ color: "green" }}></span>
            </small>
          <div style={{ display: !show ? "block" : "none" }}>
            <h3 class="mt-3">Join before it gets too late...</h3>{" "}
            <small class="mt-2 text-muted">
              Your Body can stand almost anything.
              <br />
              It's your mind that you have to continue.
            </small>
            <div class="form-input">
              {" "}
              <i class="fa fa-envelope"></i>{" "}
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                id="email"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-lock"></i>{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                placeholder="password"
                id="password"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-user"></i>{" "}
              <input
                type="full_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                placeholder="Full Name"
                id="full_name"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-user"></i>{" "}
              <input
                type="phone"
                value={mynumber}
                
                onChange={(e) => setNumber(e.target.value)}
                class="form-control"
                placeholder="Phone"
                id="phone"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-user"></i>{" "}
              <input
                type="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                class="form-control"
                placeholder="Age"
                id="age"
              />{" "}
            </div>
            <div class="form-check">
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />{" "}
              <label class="form-check-label" for="flexCheckChecked">
                {" "}
                I agree all the statements{" "}
              </label>{" "}
            </div>
            <div className="d-flex justify-content-center mt-4">
                  <div id="recaptcha-container"></div>
                  </div>
            <button class="btn btn-primary mt-4 signup " id="buttonSub" onClick={signup}>
              Register
            </button>
          </div>
        <div className="form-input">
          <div style={{ display: show ? "block" : "none" }}>
      
                  <i className="fa fa-lock"></i>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder={"Enter your OTP"}
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                  ></input>{" "}
                  <div className="d-flex justify-content-center mt-4">
                  <button className="otpButton1" onClick={ValidateOtp}>Verify</button>
                  </div>
          </div>  
        </div> 
            <div class="text-center mt-4">
              {" "}
              <span>Already a member? </span>{" "}
              <font color="#ffc400">
                <Link to="/premium" class="text-decoration-none">
                  Login
                </Link>
              </font>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
