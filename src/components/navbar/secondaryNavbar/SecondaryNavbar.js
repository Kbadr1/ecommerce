import React, { useState } from "react";
import "./secondaryNavbar.css";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "eg",
    dir: "rtl",
  },
];

const SecondaryNavbar = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentLanguageCode
  );
  const { t } = useTranslation();

  const [float, setFloat] = useState("");
  const [iconMargin, setIconMargin] = useState("");
  const ManageStylesByLanguage = () => {
    if (document.body.dir === "ltr") {
      setFloat("float-end");
      setIconMargin("me-1");
    } else {
      setFloat("float-start");
      setIconMargin("ms-1");
    }
  };

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");

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
                  className={`flag-icon flag-icon-${
                    language.country_code
                  } me-1 ${document.body.dir === "rtl" ? "d-none" : ""}`}
                ></span>
                {language.name}
                <span
                  className={`flag-icon flag-icon-${
                    language.country_code
                  } me-1  ${document.body.dir === "ltr" ? "d-none" : ""}`}
                ></span>
              </button>
            ))}
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h6>
              <i
                className={`bi bi-telephone  ${
                  document.body.dir === "rtl" ? "d-none" : "me-1"
                }`}
              ></i>
              {t("navbar_phone")}
              <i
                className={`bi bi-telephone   ${
                  document.body.dir === "ltr" ? "d-none" : "me-1"
                }`}
              ></i>
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
