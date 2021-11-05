import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/registerActions";
import "./register.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const registerError = useSelector((state) => state.authReducer.registerError);

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

  useEffect(() => {
    handleFormValidation();
    manageLabelDir();
  }, [currentLanguage]);

  return (
    <div className="Register">
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
              onChange={handleLasttName}
              placeholder="name@example.com"
              required
            />
            <label className={labelDir} htmlFor="lastName">
              {t("register.lastname_label")}
            </label>
            <div className="invalid-feedback">
              {t("register.lastname_error")}
            </div>
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
              onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          {t("register.create_new")}
        </button>
        <p className="question">
          <span>{t("register.already_member")}</span>
        </p>
        <Link className="btn" to="/login">
          {t("register.login_button")}
        </Link>
      </form>
    </div>
  );
};

export default Register;
