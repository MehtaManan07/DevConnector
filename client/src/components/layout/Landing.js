import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="buttons">
          <a href="register.html" className="btn btn-primary">
            Sign Up
          </a>
          <a href="login.html" className="btn btn-light">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
