import React, { useState } from "react";
import "./secondaryNavbar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SecondaryNavbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const languages = useSelector((state) => state.i18Reducer.languages);

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  const [float, setFloat] = useState("");
  const [iconMargin, setIconMargin] = useState("");
  const [enFlagIconVisibility, setEnFlagIconVisibility] = useState("");
  const [arFlagIconVisibility, setArFlagIconVisibility] = useState("");
  const [enTelephoneIconVisibility, setEnTelephoneIconVisibility] =
    useState("");
  const [arTelephoneIconVisibility, setARTelephoneIconVisibility] =
    useState("");
  const ManageStylesByLanguage = () => {
    if (currentLanguage.dir === "ltr") {
      setFloat("float-end");
      setIconMargin("me-1");
      setEnFlagIconVisibility("");
      setArFlagIconVisibility("d-none");
      setEnTelephoneIconVisibility("me-1");
      setARTelephoneIconVisibility("d-none");
    } else {
      setFloat("float-start");
      setIconMargin("ms-1");
      setEnFlagIconVisibility("d-none");
      setArFlagIconVisibility("");
      setEnTelephoneIconVisibility("d-none");
      setARTelephoneIconVisibility("me-1");
    }
  };

  useEffect(() => {
    ManageStylesByLanguage();
  }, [currentLanguage, t]);

  return (
    <nav className="SecondaryNavbar d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-2 d-flex align-items-center">
            <h6>
              <i className={`bi bi-truck ${iconMargin}`}></i>{" "}
              {t("secondaryNavbar_fast")}
            </h6>
          </div>
          <div className="col-2  d-flex align-items-center">
            <h6>
              <i className={`bi bi-credit-card-2-front ${iconMargin}`}></i>{" "}
              {t("secondaryNavbar_returns")}
            </h6>
          </div>
          <div className="col-6">
            {languages.map((language) => (
              <button
                key={language.country_code}
                style={{
                  fontFamily:
                    language.country_code === "eg"
                      ? "Cairo, sans-serif"
                      : "Robot, sans-serif",
                }}
                onClick={() => i18next.changeLanguage(language.code)}
                className={`btn
                  ${float}
                ${language.name === currentLanguage.name ? "d-none" : ""}`}
              >
                <span
                  className={`flag-icon flag-icon-${language.country_code} me-1 ${enFlagIconVisibility}`}
                ></span>
                {language.name}
                <span
                  className={`flag-icon flag-icon-${language.country_code} me-1  ${arFlagIconVisibility}`}
                ></span>
              </button>
            ))}
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h6>
              <i
                className={`bi bi-telephone  ${enTelephoneIconVisibility}`}
              ></i>
              {t("navbar_phone")}
              <i
                className={`bi bi-telephone   ${arTelephoneIconVisibility}`}
              ></i>
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
