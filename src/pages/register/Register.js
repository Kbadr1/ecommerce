import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/registerActions";
import "./register.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const registerError = useSelector((state) => state.authReducer.registerError);
  const registerLoading = useSelector(
    (state) => state.authReducer.registerLoading
  );
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setUsername(`${firstName}  ${lastName}`);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setUsername(`${firstName}  ${lastName}`);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, password, email, phone, history));
  };

  const handleFormValidation = () => {
    var forms = document.querySelectorAll(".needs-validation");
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

  useEffect(() => {
    handleFormValidation();
  }, []);

  return (
    <div className="Register">
      <div className="container form-container">
        <form className="needs-validation" noValidate onSubmit={registerSubmit}>
          <div className={`${registerError ? "register-error" : "d-none"}`}>
            <h6>{t("register.error")}</h6>
          </div>
          <h5>{t("register.title")}</h5>
          <div className="row">
            {/* first name */}
            <div
              className={`form-floating ${
                currentLanguage.dir === "ltr"
                  ? "en-form-floating"
                  : "ar-form-floating"
              } col mb-3`}
            >
              <input
                type="text"
                className={`form-control ${
                  currentLanguage.dir === "ltr"
                    ? "en-invalid-icon"
                    : "ar-invalid-icon"
                }`}
                id="firstName"
                value={firstName}
                onChange={handleFirstName}
                placeholder="name@example.com"
                required
              />
              <label
                className={
                  currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
                }
                htmlFor="firstName"
              >
                {t("register.firstname_label")}
              </label>
              <div className="invalid-feedback">
                {t("register.firstname_error")}
              </div>
            </div>
            {/* last name */}
            <div
              className={`form-floating ${
                currentLanguage.dir === "ltr"
                  ? "en-form-floating"
                  : "ar-lastName-form-floating"
              } col mb-3`}
            >
              <input
                type="text"
                className={`form-control ${
                  currentLanguage.dir === "ltr"
                    ? "en-invalid-icon"
                    : "ar-invalid-icon"
                }`}
                id="lastName"
                value={lastName}
                onChange={handleLastName}
                placeholder="name@example.com"
                required
              />
              <label
                className={
                  currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
                }
                htmlFor="lastName"
              >
                {t("register.lastname_label")}
              </label>
              <div className="invalid-feedback">
                {t("register.lastname_error")}
              </div>
            </div>
          </div>
          <div className="row">
            {/* mobile code */}
            <div className={`col-3 form-floating  mb-3`}>
              <input
                disabled
                type="text"
                className="form-control mobile-code"
                id="mobileNumberCode"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="mobileNumberCode">
                {t("register.phone_code_label")}
              </label>
            </div>
            {/* mobile number */}
            <div
              className={`form-floating ${
                currentLanguage.dir === "ltr"
                  ? "en-form-floating"
                  : "ar-form-floating"
              } col-9 mb-3`}
            >
              <input
                type="text"
                className={`form-control ${
                  currentLanguage.dir === "ltr"
                    ? "en-invalid-icon"
                    : "ar-invalid-icon"
                }`}
                id="mobileNumber"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="name@example.com"
                required
                minLength="10"
                maxLength="10"
              />
              <label
                className={
                  currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
                }
                htmlFor="mobileNumber"
              >
                {t("register.phone_label")}
              </label>
              <div className="invalid-feedback">
                {phone.length === 0
                  ? `${t("register.phone_req_error")}`
                  : `${t("register.phone_error")}`}
              </div>
            </div>
          </div>
          {/* email */}
          <div
            className={`form-floating ${
              currentLanguage.dir === "ltr"
                ? "en-email-form-floating"
                : "ar-form-floating"
            } mb-3`}
          >
            <input
              type="email"
              className={`form-control ${
                currentLanguage.dir === "ltr"
                  ? "en-invalid-icon"
                  : "ar-invalid-icon"
              }`}
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="name@example.com"
              required
            />
            <label
              style={{ paddingLeft: "4px", paddingRight: "0" }}
              className={
                currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
              }
              htmlFor="email"
            >
              {t("register.email_label")}
            </label>
            <div className="invalid-feedback">
              {email.length === 0
                ? `${t("register.email_req_error")}`
                : `${t("register.email_error")}`}
            </div>
          </div>
          {/* password */}
          <div
            className={`form-floating ${
              currentLanguage.dir === "ltr"
                ? "en-email-form-floating"
                : "ar-password-form-floating"
            } mb-3`}
          >
            <input
              type="password"
              className={`form-control ${
                currentLanguage.dir === "ltr"
                  ? "en-invalid-icon"
                  : "ar-invalid-icon"
              }`}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              required
              minLength="8"
            />
            <label
              style={{ paddingLeft: "4px", paddingRight: "0" }}
              className={
                currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
              }
              htmlFor="password"
            >
              {t("register.password_label")}
            </label>
            <div className="invalid-feedback">
              {password.length === 0
                ? `${t("register.password_req_error")}`
                : `${t("register.password_error")}`}
            </div>
          </div>

          <button className="btn login-button" type="submit">
            {registerLoading ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </>
            ) : (
              t("register.create_new")
            )}
          </button>
          <p className="question">
            <span>{t("register.already_member")}</span>
          </p>
          <Link className="btn" to="/login">
            {t("register.login_button")}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
