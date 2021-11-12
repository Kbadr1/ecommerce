import React, { useEffect, useState } from "react";
import "./mainNavbar.css";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/logoutActions";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const languages = useSelector((state) => state.i18Reducer.languages);
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const currentLanguageCode = currentLanguage.code;
  const isAuthinticated = useSelector(
    (state) => state.authReducer.isAuthinticated
  );
  const user = useSelector((state) => state.authReducer.user);

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
      className={`btn p-0
        ${currentLanguageCode === "ar" ? "float-end" : "float-start"}
      ${language.name === currentLanguage.name ? "d-none" : ""}`}
    >
      {language.name}
      {/* country flag */}
      {/* <span
        className={`flag-icon flag-icon-${language.country_code} mx-1 `}
      ></span> */}
    </button>
  ));

  const [navbarPosition, setNavbarPosition] = useState("");
  const manageNavbarPosition = () => {
    if (window.scrollY > 29) {
      setNavbarPosition("fixed-top");
    } else {
      setNavbarPosition("");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", manageNavbarPosition);
  }, []);

  return (
    <nav
      className={`MainNavbar navbar navbar-expand-lg navbar-light bg-light ${navbarPosition}`}
    >
      <div className="container">
        {/* logo */}
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Freshgo" />
        </Link>
        {/* only visible on small and medium screens  */}
        <div className="only-small-container d-flex d-lg-none align-items-center justify-content-center">
          {/* cart and user links visibile only on small and medium screens */}
          <div className="d-flex align-items-center justify-content-center">
            <Link className="pe-3" to="/cart">
              <i className="bi bi-cart3"></i>
            </Link>
            {isAuthinticated ? (
              <div className="d-flex align-items-center">
                <span className="username">{user.username}</span>
              </div>
            ) : (
              <Link to="/login">
                <i className="bi bi-person-circle pe-3"></i>
              </Link>
            )}
          </div>
          {/* button to toggle navbar visibile only on small and medium screens */}
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
        </div>
        {/* form only for small and medium screens */}
        <form
          className="d-flex  d-lg-none"
          style={{ width: "100%", marginTop: "5px", padding: "0" }}
        >
          <input
            className={`form-control ${
              currentLanguageCode === "ar" ? "rounded-end" : "rounded-start"
            }`}
            type="search"
            placeholder={t("mainNavbar_input_placeholder")}
            aria-label="Search"
          />
          <button
            className={`btn btn-outline-success ${
              currentLanguageCode === "ar" ? "rounded-start" : "rounded-end"
            }`}
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
        {/* -------------------------------------  */}
        {/* navbar content (form and Links) */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* form only for +lg screens */}
          <form className=" d-none d-lg-flex">
            <input
              className={`form-control ${
                currentLanguageCode === "ar" ? "rounded-end" : "rounded-start"
              }`}
              type="search"
              placeholder={t("mainNavbar_input_placeholder")}
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-success ${
                currentLanguageCode === "ar" ? "rounded-start" : "rounded-end"
              }`}
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
          {/* navabr links list */}
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            {/* products link for all screens */}
            <li className="nav-item">
              <NavLink
                activeClassName="active-link"
                className="nav-link px-2"
                to="/shop"
              >
                {t("mainNavbar.products")}
              </NavLink>
            </li>
            {/* deals link for all screens */}
            <li className="nav-item">
              <NavLink
                activeClassName="active-link"
                className="nav-link px-2"
                to="/deals"
              >
                {t("mainNavbar.Deals")}
              </NavLink>
            </li>
            {/* login / username dropdown only for +lg screens */}
            {isAuthinticated ? (
              <li className="nav-item dropdown d-none d-lg-block">
                <a
                  className="nav-link dropdown-toggle px-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> {user.username}{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="nav-link px-2" to="/orders">
                      {t("mainNavbar.orders")}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn nav-link px-2"
                      onClick={() => dispatch(logout())}
                    >
                      {t("mainNavbar.logout")}
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item d-none d-lg-block">
                <NavLink
                  activeClassName="active-link"
                  className="nav-link px-2"
                  to="/login"
                >
                  <i className="bi bi-person-circle"></i>{" "}
                  {t("mainNavbar.login")}
                </NavLink>{" "}
              </li>
            )}
            {/* cart link only for +lg screens */}
            <li className="nav-item">
              <NavLink
                activeClassName="active-link"
                className="nav-link cart-link px-2 d-none d-lg-block"
                to="/cart"
              >
                <i className="bi bi-cart3"></i> {t("mainNavbar.cart")}
              </NavLink>
            </li>
            {/* language button only for small and medium screens */}
            <li className="nav-item d-block d-lg-none px-2">
              {languageButton}
            </li>
            {/* logout button only for small and medium screens */}
            {isAuthinticated && (
              <li className="nav-item d-block d-lg-none px-2">
                <button
                  className="btn nav-link small-logout"
                  onClick={() => dispatch(logout())}
                >
                  {t("mainNavbar.logout")}
                </button>
              </li>
            )}

            {/* ------------------------------------------------ */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
