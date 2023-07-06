
import "./SignUp.css";
import React, { useRef, useState } from "react";
import SignedIn from "./SignedIn";

const SignUp = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [signNameValid, setSignNameValid] = useState(false);
  const [signPassValid, setSignPassValid] = useState(false);
  const [upPassValid, setUpPassValid] = useState(false);
  const [upMailValid, setUpMailValid] = useState(false);
  const [upNameValid, setUpNameValid] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const signUpUsername = useRef("");
  const signNameRef = useRef("");
  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };
  function signInHandelr(event) {
    event.preventDefault();
    localStorage.setItem("signedIn", true);
    localStorage.setItem("userName", `${signNameRef.current.value}`);

    setSignedIn(true);
  }

  function signUpHandler(event) {
    event.preventDefault();
    localStorage.setItem("signedIn", true);
    localStorage.setItem("userName", `${signUpUsername.current.value}`);
    setSignedIn(true);
  }
  if (signedIn) {
    return <SignedIn />;
  } else {
    return (
      <div className="container">
        <div className="form-structor">
          <form
            className={`signup ${isLoginFormVisible ? "" : "slide-up"}`}
            onSubmit={signUpHandler}
          >
            <h2 className="form-title" id="signup" onClick={toggleForm}>
              Sign up
            </h2>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                placeholder="Name"
                onChange={(e) => {
                  e.target.value !== "" && setUpNameValid(true);
                }}
                ref={signUpUsername}
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                onChange={(e) => {
                  e.target.value.includes("@") && setUpMailValid(true);
                }}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => {
                  e.target.value.length > 8 && setUpPassValid(true);
                }}
              />
            </div>
            {upMailValid && upNameValid && upPassValid && (
              <button className="submit-btn" type="submit">
                Sign up
              </button>
            )}
          </form>
          <div className={`login ${isLoginFormVisible ? "slide-up" : ""}`}>
            <div className="center">
              <h2 className="form-title" id="login" onClick={toggleForm}>
                Log in
              </h2>
              <div className="form-holder">
                <input
                  type="name"
                  className="input"
                  placeholder="Username"
                  onChange={(e) => {
                    e.target.value !== "" && setSignNameValid(true);
                  }}
                  ref={signNameRef}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  onChange={(e) => {
                    e.target.value.length > 8 && setSignPassValid(true);
                  }}
                />
              </div>
              {signPassValid && signNameValid && (
                <button
                  className="submit-btn"
                  type="submit"
                  onClick={signInHandelr}
                >
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
