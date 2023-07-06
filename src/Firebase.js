// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5gQCsAK45vAD88MjbNrfh1SlkxIZG7GI",
  authDomain: "gothambo-97b8c.firebaseapp.com",
  databaseURL:
    "https://gothambo-97b8c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gothambo-97b8c",
  storageBucket: "gothambo-97b8c.appspot.com",
  messagingSenderId: "67577170652",
  appId: "1:67577170652:web:b03a8eba1281f124314219",
  measurementId: "G-DP5C8YVYK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* 
import { useRef } from "react";
import styles from "./Login.module.css";
function SignIn() {
  return (
    <div className={styles.background}>
      <div className={styles["form-structor"]}>
        <div className={styles.signup}>
          <h2 className={styles["form-title"]} id={styles.signup}>
            <span></span>Sign In
          </h2>
          <div className={styles["form-holder"]}>
            <input type="email" className={styles.input} placeholder="Email" />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
            />
          </div>
          <button className={styles["submit-btn"]}>Sign In</button>
        </div>
        <div className={styles.login + " " + styles["slide-up"]}>
          <div className={styles.center}>
            <h2 className={styles["form-title"]} id={styles.login}>
              <span></span>Sign Up
            </h2>
            <button className={styles["submit-btn"]}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn; 
*/

/*
.background {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(132deg, #000000, #5f5f5f, #ffffff);
    display: flex;
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    align-items: center;
    justify-content: center;
    font-family: "Fira Sans", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0px;
}

.form-structor {
    background-color: #000000;
    border-radius: 15px;
    height: 600px;
    width: 375px;
    position: relative;
    overflow: hidden;
}

.form-structor::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 500px;
    background-image: url("/public/ShopWelcomeImages/sign.webp");
}

.form-structor .signup {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup.slide-up {
    top: 5%;
    -webkit-transform: translate(-50%, 0%);
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup.slide-up .form-holder,
.form-structor .signup.slide-up .submit-btn {
    opacity: 0;
    visibility: hidden;
}

.form-structor .signup.slide-up .form-title {
    font-size: 1em;
    cursor: pointer;
}

.form-structor .signup.slide-up .form-title span {
    margin-right: 5px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-title {
    color: #fff;
    font-size: 30px;

}

.form-structor .signup .form-title span {
    color: rgba(255, 255, 255, 0.4);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-holder {
    border-radius: 15px;
    background-color: #ffffff00;
    overflow: hidden;
    margin-top: 50px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-holder .input {
    border: 0;
    outline: none;
    box-shadow: none;
    display: block;
    height: 30px;
    line-height: 30px;
    padding: 8px 15px;
    border-bottom: 1px solid #000000;
    background-color: rgba(134, 133, 133, 0.453);
    color: white;
    width: 100%;
    font-size: 12px;
}




.form-structor .signup .form-holder .input:last-child {
    border-bottom: 0;
}

.form-structor .signup .form-holder .input::-webkit-input-placeholder {
    color: rgb(255, 255, 255);
}

.form-structor .signup .submit-btn {
    background-color: rgba(255, 255, 255, 0);
    color: rgb(255, 255, 255);
    border: 0;
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

.form-structor .signup .submit-btn:hover {
    transition: all 0.3s ease;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0)
}

.form-structor .login {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff7f700;
    z-index: 5;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -20px;
    -webkit-transform: translate(-50%, 0);
    background-color: rgb(255, 255, 255);
    width: 200%;
    height: 250px;
    border-radius: 50%;
    z-index: 4;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login .center {
    position: absolute;
    top: calc(50% - 10%);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-title {
    color: #000;
    font-size: 30px;
    align-content: center;
    text-justify: center;

}

.form-structor .login .center .form-title span {
    color: rgba(255, 255, 255, 0.4);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-holder {
    border-radius: 15px;
    background-color: #ffffff00;
    border: 1px solid #eee;
    overflow: hidden;
    margin-top: 50px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-holder .input {
    border: 0;
    outline: none;
    box-shadow: none;
    display: block;
    height: 30px;
    line-height: 30px;
    padding: 8px 15px;
    border-bottom: 1px solid #eee;
    width: 100%;
    font-size: 12px;
}

.form-structor .login .center .form-holder .input:last-child {
    border-bottom: 0;
}

.form-structor .login .center .form-holder .input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-structor .login .center .submit-btn {
    background-color: #f0f0f000;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .submit-btn:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
}

.form-structor .login.slide-up {
    top: 90%;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .center {
    top: 10%;
    -webkit-transform: translate(-50%, 0%);
    -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-holder,
.form-structor .login.slide-up .submit-btn {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-title {
    font-size: 1em;
    margin: 0;
    padding: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-title span {
    margin-right: 5px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
}

@keyframes Gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}*/