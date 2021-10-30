import React, { useEffect, useState } from "react";
import "./mainNavbar.css";

import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

import logoImage from "../../../images/logo.png";

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

const MainNavbar = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentLanguageCode
  );
  const { t } = useTranslation();

  const [inputDirection, setInputDirection] = useState("");
  const [buttonDirection, setButtonDirection] = useState("");
  const [cartPadding, setCartPadding] = useState("");
  const manageStylesByLanguage = () => {
    if (document.body.dir === "ltr") {
      setInputDirection("en-input");
      setButtonDirection("en-button");
      setCartPadding("ps-3");
    } else {
      setInputDirection("ar-input");
      setButtonDirection("ar-button");
      setCartPadding("pe-3");
    }
  };

  const [navbarPosition, setNavbarPosition] = useState("");
  const manageNavbarPosition = () => {
    if (window.scrollY > 20) {
      setNavbarPosition("fixed-top");
    } else {
      setNavbarPosition("");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", manageNavbarPosition);
    manageStylesByLanguage();
  }, [currentLanguage, t]);

  return (
    <nav
      className={`MainNavbar navbar navbar-expand-lg navbar-light bg-light ${navbarPosition}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logoImage} alt="Freshgo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input
              className={`form-control ${inputDirection}`}
              type="search"
              placeholder={t("mainNavbar_input_placeholder")}
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-success ${buttonDirection}`}
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                {t("mainNavbar_Deals")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                <i className="bi bi-person-circle"></i> {t("mainNavbar_login")}
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link cart-link ${cartPadding}`} href="#">
                <i className="bi bi-cart3"></i> {t("mainNavbar_cart")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
