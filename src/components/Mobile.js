import React, { useEffect, useState } from "react";
import { firebase, auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import './styles/login_form.css'
const Login = () => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [final, setfinal] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboardMobile");
  });

  // Sent OTP
  const signin = () => {
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
        alert("Logged In");
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <>
      
      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <small>
                <span id="error" style={{ color: "red" }}></span>
              </small>
              <small>
                <span id="reset" style={{ color: "greenyellow" }}></span>
              </small>
              <h3 className="mt-3">Login Here!</h3>{" "}
              <small className="mt-1 text-muted">
                Welcome to{" "}
                <font color="#ffc400" size="4px">
                  A
                </font>
                thlete{" "}
                <font color="#ffc400" size="4px">
                  C
                </font>
                lub
              </small>
              <div className="form-input">
                {" "}
                <div style={{ display: !show ? "block" : "none" }}>
                <i className="fa fa-mobile"></i>
                  <input
                    className="form-control"
                    id="email"
                    value={mynumber}
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    placeholder="Mobile number"
                  />{" "}
                  <br />
                  <div className="d-flex justify-content-center mt-4">
                  <div id="recaptcha-container"></div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                  <button
                    className="otpButton1"
                    onClick={signin}
                  >
                    Send OTP
                  </button>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
