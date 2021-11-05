import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import Form from "./Form";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [labelDir, setLabelDir] = useState("");
  const [invalidIconDir, setInvalidIconDir] = useState("");

  const loginError = useSelector((state) => state.authReducer.loginError);
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const manageLabelDir = () => {
    if (currentLanguage.dir === "ltr") {
      setLabelDir("en-label");
      setInvalidIconDir("en-invalid-icon");
    } else {
      setLabelDir("ar-label");
      setInvalidIconDir("ar-invalid-icon");
    }
  };

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
    manageLabelDir();
  }, [currentLanguage]);

  return (
    <div className="Login container">
      <Form
        loginSubmit={loginSubmit}
        loginError={loginError}
        t={t}
        invalidIconDir={invalidIconDir}
        identifier={identifier}
        handleIdentifierChange={handleIdentifierChange}
        labelDir={labelDir}
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default Login;
