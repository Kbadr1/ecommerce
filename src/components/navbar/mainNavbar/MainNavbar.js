import React, { useEffect, useState } from "react";
import "./mainNavbar.css";
import { Link } from "react-router-dom";
import logoImage from "../../../images/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/logoutActions";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  const [inputDirection, setInputDirection] = useState("");
  const [buttonDirection, setButtonDirection] = useState("");
  const [cartPadding, setCartPadding] = useState("");
  const manageStylesByLanguage = () => {
    if (currentLanguage.dir === "ltr") {
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

  const isAuthinticated = useSelector(
    (state) => state.authReducer.isAuthinticated
  );
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    document.addEventListener("scroll", manageNavbarPosition);
    manageStylesByLanguage();
  }, [currentLanguage, t]);

  return (
    <nav
      className={`MainNavbar navbar navbar-expand-lg navbar-light bg-light ${navbarPosition}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Freshgo" />
        </Link>

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
              <Link className="nav-link px-3" to="#">
                {t("mainNavbar_Deals")}
              </Link>
            </li>
            <li className="nav-item">
              {isAuthinticated === false && (
                <Link className="nav-link px-3" to="/login">
                  <i className="bi bi-person-circle"></i>
                  {t("mainNavbar_login")}
                </Link>
              )}
              {isAuthinticated === true && (
                <li className="nav-item">
                  <button
                    className="btn nav-link px-3"
                    onClick={() => dispatch(logout())}
                  >
                    logout
                  </button>
                </li>
              )}
            </li>
            <li className="nav-item">
              <Link className={`nav-link cart-link ${cartPadding}`} to="#">
                <i className="bi bi-cart3"></i> {t("mainNavbar_cart")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
