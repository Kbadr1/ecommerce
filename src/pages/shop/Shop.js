import React, { useEffect } from "react";
import "./shop.css";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../redux/actions/productsActions";
import { useTranslation } from "react-i18next";
import {
  ProductsLoading,
  CategoriesList,
  Product,
  PagePath,
} from "../../components";

const Shop = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const products = useSelector((state) => state.productsReducer.products);
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  const allProducts =
    productsLoading === true ? (
      <ProductsLoading columns="col-6 col-md-6 col-lg-4" />
    ) : (
      <>
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-6 col-lg-4">
            <Product product={product} />
          </div>
        ))}
      </>
    );

  return (
    <div className="Shop container">
      <PagePath currentPage={t("shop.all_products")} />
      <div className="row">
        <CategoriesList />
        <div className="col-md-8 col-lg-9">
          <div className="row">{allProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
