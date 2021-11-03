import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { login } from "../../redux/actions/loginActions";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const handleFormValidation = () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  };

  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password, history));
  };

  useEffect(() => {
    handleFormValidation();
  }, []);
  return (
    <div className="Login container">
      <form className="needs-validation" noValidate onSubmit={loginSubmit}>
        <h5>Login to your account</h5>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="name@example.com"
            required
          />
          <label htmlFor="email">Username or Email </label>
          <div className="invalid-feedback">Required</div>
        </div>
        <div className="form-floating mb-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            required
          />
          <label htmlFor="password">Password</label>
          <div className="invalid-feedback">Required</div>
        </div>
        <button className="btn login-button" type="submit">
          LOGIN
        </button>
        <p className="question">
          <span>Don't have an account?</span>
        </p>
        <Link className="btn" to="/register">
          REGISTER
        </Link>
      </form>
    </div>
  );
};

export default Login;
