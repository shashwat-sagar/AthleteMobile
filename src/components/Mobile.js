import React, { useEffect, useState } from "react";
import { firebase, auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

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
      
      <div class="container mt-5 mb-5">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="card px-5 py-5">
              <small>
                <span id="error" style={{ color: "red" }}></span>
              </small>
              <small>
                <span id="reset" style={{ color: "greenyellow" }}></span>
              </small>
              <h3 class="mt-3">Login Here!</h3>{" "}
              <small class="mt-1 text-muted">
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
              <div class="form-input">
                {" "}
                <div style={{ display: !show ? "block" : "none" }}>
                  <input
                    class="form-control"
                    id="email"
                    value={mynumber}
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    placeholder="Mobile number"
                  />{" "}
                  <br />
                  <div id="recaptcha-container"></div>
                  <button
                    class="btn btn-primary mt-4 signup "
                    id="buttonSub"
                    onClick={signin}
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div class="form-input">
                <div style={{ display: show ? "block" : "none" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder={"Enter your OTP"}
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                  ></input>{" "}
                  
                  <button   class="btn btn-primary mt-4 signup "
                    id="buttonSub" onClick={ValidateOtp}>Verify</button>
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
