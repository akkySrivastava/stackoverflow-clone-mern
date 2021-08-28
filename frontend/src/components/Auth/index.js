import React from "react";
import "./index.css";

function Index() {
  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services. </p>
        <div className="sign-options">
          <div className="single-option">
            <img
              alt="google"
              src="https://image.flaticon.com/icons/png/512/281/281764.png"
            />
            <p>Add login with Google</p>
          </div>
          <div className="single-option">
            <img
              alt="github"
              src="https://image.flaticon.com/icons/png/512/270/270798.png"
            />
            <p>Add login with Github</p>
          </div>
          <div className="single-option">
            <img
              alt="facebook"
              src="https://image.flaticon.com/icons/png/512/733/733547.png"
            />
            <p>Add login with Facebook</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            <div className="input-field">
              <p>Email</p>
              <input type="text" />
            </div>
            <div className="input-field">
              <p>Password</p>
              <input type="password" />
            </div>
            <button
              style={{
                marginTop: "10px",
              }}
            >
              Login
            </button>
            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Register ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
