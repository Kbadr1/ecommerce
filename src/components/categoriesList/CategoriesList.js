import React, { useEffect, useState } from "react";
import "./categoriesList.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { categoriesFetch } from "../../redux/actions/categoriesActions";
import CategoriesListLoading from "../categoriesListLoading/CategoriesListLoading";

const CategoriesList = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const categoriesLoading = useSelector(
    (state) => state.categoriesReducer.categoriesLoading
  );

  const [collapseIcon, setCollapseIcon] = useState("plus");

  useEffect(() => {
    dispatch(categoriesFetch());
  }, []);

  const allCategories =
    categoriesLoading === true ? (
      <CategoriesListLoading />
    ) : (
      categories
        .sort((a, b) =>
          currentLanguage.code === "en"
            ? a.en_name.localeCompare(b.en_name)
            : a.ar_name.localeCompare(b.ar_name)
        )
        .map(({ id, products, en_name, ar_name }) => (
          <li key={id}>
            <NavLink activeClassName="active-category" to={`/category/${id}`}>
              {currentLanguage.code === "en" ? en_name : ar_name} (
              {products.length})
            </NavLink>
          </li>
        ))
    );

  return (
    <>
      {/* display on small screens */}
      <div className="d-block d-md-none small-categoriesList">
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Categories{" "}
          <span>
            <i className={`bi bi-${collapseIcon}-lg`}></i>
          </span>
        </button>
        <ul className="collapse" id="collapseExample">
          {allCategories}
        </ul>
      </div>
      {/* display on +md screens */}
      <div className="d-none d-md-block col-md-4 col-lg-3 categoriesList">
        <ul>
          <li className="title">{t("shop.category")}</li>
          {allCategories}
        </ul>
      </div>
    </>
  );
};

export default CategoriesList;
