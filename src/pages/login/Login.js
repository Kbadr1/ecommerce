import React, { useEffect, useState } from "react";
import "./login.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const loginLoading = useSelector((state) => state.authReducer.loginLoading);
  const loginError = useSelector((state) => state.authReducer.loginError);

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(identifier, password, history));
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
    <div className="Login">
      <div className="container form-container">
        <form className="needs-validation" noValidate onSubmit={loginSubmit}>
          <div className={`${loginError ? "login-error" : "d-none"}`}>
            <h6>{t("login.error")}</h6>
          </div>
          <h5>{t("login.title")}</h5>
          <div
            className={`form-floating ${
              currentLanguage.dir === "ltr"
                ? "en-form-floating"
                : "ar-form-floating"
            } mb-3`}
          >
            <input
              type="text"
              className={`form-control ${
                currentLanguage.dir === "ltr"
                  ? "en-invalid-icon"
                  : "ar-invalid-icon"
              }`}
              id="email"
              value={identifier}
              onChange={handleIdentifierChange}
              placeholder="name@example.com"
              required
            />
            <label
              className={
                currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
              }
              htmlFor="email"
            >
              {t("login.email_label")}
            </label>
            <div className="invalid-feedback ">{t("login.email_error")}</div>
          </div>
          <div
            className={`form-floating ${
              currentLanguage.dir === "ltr"
                ? "en-form-floating"
                : "ar-password-form-floating"
            } mb-3`}
          >
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className={`form-control ${
                currentLanguage.dir === "ltr"
                  ? "en-invalid-icon"
                  : "ar-invalid-icon"
              }`}
              id="password"
              placeholder="password"
              required
            />
            <label
              className={
                currentLanguage.dir === "ltr" ? "en-label" : "ar-label"
              }
              htmlFor="password"
            >
              {t("login.password_label")}
            </label>
            <div className="invalid-feedback">{t("login.password_error")}</div>
          </div>
          <button className="btn login-button" type="submit">
            {loginLoading ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </>
            ) : (
              t("login.login_button")
            )}
          </button>
          <p className="question">
            <span>{t("login.no_account")}</span>
          </p>
          <Link className="btn" to="/register">
            {t("login.register_button")}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
