import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/registerActions";
import "./register.css";
import { useHistory } from "react-router";

const Register = () => {
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
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setUsername(`${firstName}  ${lastName}`);
  };
  const handleLasttName = (e) => {
    setLastName(e.target.value);
    setUsername(`${firstName}  ${lastName}`);
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, password, email, phone, history));
  };

  useEffect(() => {
    handleFormValidation();
  }, []);

  return (
    <div className="Register">
      <form className="needs-validation" noValidate onSubmit={registerSubmit}>
        <h5>Create a new account</h5>
        <div className="row">
          <div className="form-floating col mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={handleFirstName}
              placeholder="name@example.com"
              required
            />
            <label htmlFor="firstName">First name</label>
            <div className="invalid-feedback">Required</div>
          </div>
          <div className="form-floating col mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={handleLasttName}
              placeholder="name@example.com"
              required
            />
            <label htmlFor="lastName">Last name</label>
            <div className="invalid-feedback">Required</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 form-floating mb-3">
            <input
              disabled
              type="text"
              className="form-control mobile-code"
              id="mobileNumberCode"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="mobileNumberCode">+ 20</label>
          </div>
          <div className="form-floating col-9 mb-3">
            <input
              type="text"
              className="form-control"
              id="mobileNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="name@example.com"
              required
              minLength="10"
              maxLength="10"
            />
            <label htmlFor="mobileNumber">Mobile Number</label>
            <div className="invalid-feedback">
              {phone.length === 0
                ? "Required"
                : "please enter a valid phone number."}
            </div>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
          />
          <label htmlFor="email">Email address</label>
          <div className="invalid-feedback">
            {email.length === 0 ? "Required" : "Please enter a valid Email."}
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            minLength="8"
          />
          <label htmlFor="password">Password</label>
          <div className="invalid-feedback">
            {password.length === 0
              ? "Required"
              : "Password is too short - should be 8 chars minimum."}
          </div>
        </div>

        <button className="btn login-button" type="submit">
          CREATE A NEW ACCOUNT
        </button>
        <p className="question">
          <span>Already Have an account?</span>
        </p>
        <Link className="btn" to="/login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
