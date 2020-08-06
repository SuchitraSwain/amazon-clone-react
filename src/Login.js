import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
// import firebase from "firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stop the refresh
    // login logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in successfully, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //this stop the refresh
    // register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a user and logged in....
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            id="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
          <button onClick={login} type="submit" className="login__signButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sake. Please
          see our Privacy Notice, our Cookies Notice and out Interest-Based Ads
          Notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
