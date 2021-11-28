import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ProductsLoading, Product } from "../../components";

const TopProducts = () => {
  const { t } = useTranslation();

  const products = useSelector((state) => state.productsReducer.products);
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );

  const featuredProducts =
    productsLoading === true ? (
      <ProductsLoading columns="col-6 col-md-4 col-lg-3" />
    ) : (
      products
        .filter((product) => product.featured === true)
        .slice(0, 8)
        .map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <Product product={product} />
          </div>
        ))
    );

  const bestSellerProducts =
    productsLoading === true ? (
      <ProductsLoading columns="col-6 col-md-4 col-lg-3" />
    ) : (
      products
        .filter((product) => product.bestseller === true)
        .slice(0, 8)
        .map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <Product product={product} />
          </div>
        ))
    );

  const latestProducts =
    productsLoading === true ? (
      <ProductsLoading columns="col-6 col-md-4 col-lg-3" />
    ) : (
      products
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        .slice(0, 8)
        .map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <Product product={product} />
          </div>
        ))
    );

  return (
    <div className="top-products container">
      <h3>{t("home.top_products")}</h3>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            {t("home.featured")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            {t("home.best_sellers")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            {t("home.latest")}
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">{featuredProducts}</div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row">{bestSellerProducts}</div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="row">{latestProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
