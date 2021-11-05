import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { login } from "../../redux/actions/loginActions";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

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

  const loginError = useSelector((state) => state.authReducer.loginError);

  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  const [labelDir, setLabelDir] = useState("");
  const [invalidIconDir, setInvalidIconDir] = useState("");

  const manageLabelDir = () => {
    if (currentLanguage.dir === "ltr") {
      setLabelDir("en-label");
      setInvalidIconDir("en-invalid-icon");
    } else {
      setLabelDir("ar-label");
      setInvalidIconDir("ar-invalid-icon");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password, history));
  };
  const { t } = useTranslation();
  useEffect(() => {
    handleFormValidation();
    manageLabelDir();
  }, [currentLanguage]);
  return (
    <div className="Login container">
      <form className="needs-validation" noValidate onSubmit={loginSubmit}>
        <div className={`${loginError ? "login-error" : "d-none"}`}>
          <h6>{t("login.error")}</h6>
        </div>
        <h5>{t("login.title")}</h5>
        <div className={`form-floating  mb-3`}>
          <input
            type="text"
            className={`form-control ${invalidIconDir}`}
            id="email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="name@example.com"
            required
          />
          <label className={labelDir} htmlFor="email">
            {t("login.email_label")}
          </label>
          <div className="invalid-feedback ">{t("login.email_error")}</div>
        </div>
        <div className={`form-floating  mb-3`}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={`form-control ${invalidIconDir}`}
            id="password"
            placeholder="password"
            required
          />
          <label className={labelDir} htmlFor="password">
            {t("login.password_label")}
          </label>
          <div className="invalid-feedback">{t("login.password_error")}</div>
        </div>
        <button className="btn login-button" type="submit">
          {t("login.login_button")}
        </button>
        <p className="question">
          <span>{t("login.no_account")}</span>
        </p>
        <Link className="btn" to="/register">
          {t("login.register_button")}
        </Link>
      </form>
    </div>
  );
};

export default Login;
