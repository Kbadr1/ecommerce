import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { categoryFetch } from "../../redux/actions/categoriesActions";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import ProductsLoading from "../../components/productsLoading/ProductsLoading";

const Category = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const category = useSelector((state) => state.categoriesReducer.category);
  const categoryProducts = useSelector(
    (state) => state.categoriesReducer.categoryProducts
  );
  const categoryLoading = useSelector(
    (state) => state.categoriesReducer.categoryLoading
  );

  useEffect(() => {
    dispatch(categoryFetch(id));
  }, [id]);

  return (
    <div className="Category container">
      <div className="page-path">
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
              currentLanguage.dir === "ltr" ? "border-right" : "border-left"
            }
          >
            <Link to="/shop">{t("shop.all_products")}</Link>
          </li>
          <li>
            {currentLanguage.code === "en"
              ? category.en_name
              : category.ar_name}
          </li>
        </ul>
      </div>
      <div className="row">
        <CategoriesList />
        <div className="col-md-8 col-lg-9">
          <div className="row">
            {categoryLoading === true ? (
              <ProductsLoading />
            ) : (
              <>
                {categoryProducts.map((product) => (
                  <div key={product.id} className="col-6 col-md-6 col-lg-4">
                    <Product product={product} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
