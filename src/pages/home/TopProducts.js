import React from "react";
import Product from "../../components/product/Product";

const TopProducts = ({ t, products }) => {
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
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
