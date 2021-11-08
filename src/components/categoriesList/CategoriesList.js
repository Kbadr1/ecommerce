import React, { useEffect } from "react";
import "./categoriesList.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { categoriesFetch } from "../../redux/actions/categoriesActions";

const CategoriesList = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(categoriesFetch());
  }, []);

  return (
    <div className="d-none d-md-block col-md-4 col-lg-3 categoriesList">
      <ul>
        <li className="title">{t("shop.category")}</li>
        {categories.map(({ id, products, en_name, ar_name }) => (
          <li key={id}>
            <NavLink to={`/category/${id}`}>
              {currentLanguage.code === "en" ? en_name : ar_name} (
              {products.length})
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
