import React, { useEffect } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../redux/actions/productsActions";
import Product from "../../components/product/Product";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import { useTranslation } from "react-i18next";
import ProductsLoading from "../../components/productsLoading/ProductsLoading";

const Shop = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const products = useSelector((state) => state.productsReducer.products);
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  return (
    <div className="Shop container">
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
          <li>{t("shop.all_products")}</li>
        </ul>
      </div>
      <div className="row">
        <CategoriesList />
        <div className="col-md-8 col-lg-9">
          <div className="row">
            {productsLoading === true ? (
              <ProductsLoading />
            ) : (
              <>
                {products.map((product) => (
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

export default Shop;
