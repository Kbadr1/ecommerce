import React from "react";
import "./secondaryNavbar.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SecondaryNavbar = () => {
  const { t } = useTranslation();
  const languages = useSelector((state) => state.i18Reducer.languages);
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const currentLanguageCode = currentLanguage.code;

  // language button : map through the languages array and return a button for each language, hide the current selected language button
  const languageButton = languages.map((language) => (
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
        ${currentLanguageCode === "ar" ? "float-start" : "float-end"}
      ${language.name === currentLanguage.name ? "d-none" : ""}`}
    >
      {language.name}
      {/* country flag */}
      <span
        className={`flag-icon flag-icon-${language.country_code} mx-1 `}
      ></span>
    </button>
  ));

  return (
    // component only visible on +lg screens
    <nav className="SecondaryNavbar d-none d-lg-block">
      <div className="container">
        <div className="row">
          {/* -- start of row -- */}
          {/* turck icon - fast delivery */}
          <div className="col-2 d-flex align-items-center">
            <h6>
              <i className="bi bi-truck mx-1"></i> {t("secondaryNavbar_fast")}
            </h6>
          </div>
          {/* money icon - free returns */}
          <div className="col-2  d-flex align-items-center">
            <h6>
              <i className="bi bi-credit-card-2-front mx-1"></i>{" "}
              {t("secondaryNavbar_returns")}
            </h6>
          </div>
          {/* language button */}
          <div className="col-6">{languageButton}</div>
          {/* phone icon - phone number */}
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h6>
              <i className="bi bi-telephone  float-start me-1"></i>
              {t("navbar_phone")}
            </h6>
          </div>
          {/* -- end of row -- */}
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
