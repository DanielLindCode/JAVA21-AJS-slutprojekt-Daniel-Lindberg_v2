import React, { useState } from "react";

const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHanler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <div className="loginForm-container">
      <form onSubmit={submitHanler}>
        <div className="loginForm-inner">
          <div className="login-text-container">
            <p>Welcome Adventure!</p>
            <h5>email: admin@admin.com </h5>
            <h5>password: admin123</h5>
          </div>
          <div className="loginForm-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="loginForm-grpup">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="loginForm-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input className="login-input" type="submit" value="LOGIN" />
        </div>
        {error != "" ? <div className="error-text">{error}</div> : ""}
      </form>
    </div>
  );
};
export default LoginForm;
