import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/registerActions";
import "./register.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import Form from "./Form";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [labelDir, setLabelDir] = useState("");
  const [invalidIconDir, setInvalidIconDir] = useState("");

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

  const manageLabelDir = () => {
    if (currentLanguage.dir === "ltr") {
      setLabelDir("en-label");
      setInvalidIconDir("en-invalid-icon");
    } else {
      setLabelDir("ar-label");
      setInvalidIconDir("ar-invalid-icon");
    }
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
    <div className="Register">
      <Form
        t={t}
        firstName={firstName}
        handleFirstName={handleFirstName}
        lastName={lastName}
        handleLastName={handleLastName}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        registerSubmit={registerSubmit}
        registerLoading={registerLoading}
        registerError={registerError}
        labelDir={labelDir}
        invalidIconDir={invalidIconDir}
      />
    </div>
  );
};

export default Register;
