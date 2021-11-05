import React from "react";
import { Link } from "react-router-dom";

const Form = ({
  loginSubmit,
  loginError,
  t,
  invalidIconDir,
  identifier,
  handleIdentifierChange,
  labelDir,
  password,
  handlePasswordChange,
}) => {
  return (
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
          value={identifier}
          onChange={handleIdentifierChange}
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
          onChange={handlePasswordChange}
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
  );
};

export default Form;
