import React from "react";
import "./pagePath.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PagePath = ({
  firstLink,
  firstLinkTitle,
  secondLink,
  secondLinkTitle,
  thirdLink,
  thirdLinkTitle,
  currentPage,
}) => {
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  return (
    <div className="PagePath">
      <ul>
        <li
          className={
            currentLanguage.dir === "ltr" ? "border-right" : "border-left"
          }
        >
          <Link to="/">
            <i className="bi bi-house-door-fill"></i>
          </Link>
        </li>
        <li
          className={
            firstLink === undefined || firstLinkTitle === undefined
              ? "d-none"
              : currentLanguage.dir === "ltr"
              ? "border-right"
              : "border-left"
          }
        >
          <Link to={`/${firstLink}`}>{firstLinkTitle}</Link>
        </li>
        <li
          className={
            secondLink === undefined || secondLinkTitle === undefined
              ? "d-none"
              : currentLanguage.dir === "ltr"
              ? "border-right"
              : "border-left"
          }
        >
          <Link to={`/${secondLink}`}>{secondLinkTitle}</Link>
        </li>
        <li
          className={
            thirdLink === undefined || thirdLinkTitle === undefined
              ? "d-none"
              : currentLanguage.dir === "ltr"
              ? "border-right"
              : "border-left"
          }
        >
          <Link to={`/${thirdLink}`}>{thirdLinkTitle}</Link>
        </li>
        <li>{currentPage}</li>
      </ul>
    </div>
  );
};

export default PagePath;
