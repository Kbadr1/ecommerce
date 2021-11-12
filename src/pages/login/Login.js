import React, { useEffect, useState } from "react";
import "./login.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import Form from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [labelDir, setLabelDir] = useState("");
  const [invalidIconDir, setInvalidIconDir] = useState("");

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const loginLoading = useSelector((state) => state.authReducer.loginLoading);
  const loginError = useSelector((state) => state.authReducer.loginError);

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
        t={t}
        identifier={identifier}
        handleIdentifierChange={handleIdentifierChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        loginSubmit={loginSubmit}
        loginLoading={loginLoading}
        loginError={loginError}
        labelDir={labelDir}
        invalidIconDir={invalidIconDir}
      />
    </div>
  );
};

export default Login;
