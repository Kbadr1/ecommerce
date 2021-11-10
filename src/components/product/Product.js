import React from "react";
import { useSelector } from "react-redux";
import "./product.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { t } = useTranslation();
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  return (
    <div className="Product">
      <div className="product-img">
        <img src={product.image_url} alt="" />
      </div>
      <div className="product-info">
        <div className="product-description">
          <p className="product-category">
            <Link to={`/category/${product.category.id}`}>
              {currentLanguage.code === "en"
                ? product.category.en_name
                : product.category.ar_name}
            </Link>
          </p>
          <h6 className="product-name">
            {currentLanguage.code === "en" ? product.en_name : product.ar_name}
          </h6>
          <h6>
            {product.price}{" "}
            <span className="product-currency">{t("shop.price")}</span>
          </h6>
        </div>
        <div className="product-purchase">
          <div className="dropdown">
            <button
              className="btn btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              1.00 KG <i className="bi bi-chevron-down"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  0.50 kg
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1.00 kg
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1.50 kg
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2.00 kg
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2.50 kg
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  3.00 kg
                </a>
              </li>
            </ul>
          </div>
          <div className="add-container">
            <button className="btn add">{t("shop.add_button")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
