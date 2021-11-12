import React from "react";
import { Link } from "react-router-dom";

const Form = ({
  t,
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  phone,
  handlePhoneChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  registerSubmit,
  registerLoading,
  registerError,
  labelDir,
  invalidIconDir,
}) => {
  return (
    <form className="needs-validation" noValidate onSubmit={registerSubmit}>
      <div className={`${registerError ? "register-error" : "d-none"}`}>
        <h6>{t("register.error")}</h6>
      </div>
      <h5>{t("register.title")}</h5>
      <div className="row">
        <div className="form-floating col mb-3">
          <input
            type="text"
            className={`form-control ${invalidIconDir}`}
            id="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder="name@example.com"
            required
          />
          <label className={labelDir} htmlFor="firstName">
            {t("register.firstname_label")}
          </label>
          <div className="invalid-feedback">
            {t("register.firstname_error")}
          </div>
        </div>
        <div className="form-floating col mb-3">
          <input
            type="text"
            className={`form-control ${invalidIconDir}`}
            id="lastName"
            value={lastName}
            onChange={handleLastName}
            placeholder="name@example.com"
            required
          />
          <label className={labelDir} htmlFor="lastName">
            {t("register.lastname_label")}
          </label>
          <div className="invalid-feedback">{t("register.lastname_error")}</div>
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
          <label htmlFor="mobileNumberCode">
            {t("register.phone_code_label")}
          </label>
        </div>
        <div className="form-floating col-9 mb-3">
          <input
            type="text"
            className={`form-control ${invalidIconDir}`}
            id="mobileNumber"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="name@example.com"
            required
            minLength="10"
            maxLength="10"
          />
          <label className={labelDir} htmlFor="mobileNumber">
            {t("register.phone_label")}
          </label>
          <div className="invalid-feedback">
            {phone.length === 0
              ? `${t("register.phone_req_error")}`
              : `${t("register.phone_error")}`}
          </div>
        </div>
      </div>
      <div className={`form-floating mb-3`}>
        <input
          type="email"
          className={`form-control ${invalidIconDir}`}
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="name@example.com"
          required
        />
        <label className={labelDir} htmlFor="email">
          {t("register.email_label")}
        </label>
        <div className="invalid-feedback">
          {email.length === 0
            ? `${t("register.email_req_error")}`
            : `${t("register.email_error")}`}
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className={`form-control ${invalidIconDir}`}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          required
          minLength="8"
        />
        <label className={labelDir} htmlFor="password">
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
  );
};

export default Form;
