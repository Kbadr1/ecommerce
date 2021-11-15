import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./product.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  addToCart,
  adjustItemQty,
  cartTotal,
} from "../../redux/actions/cartActions";

const Product = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const cart = useSelector((state) => state.cartReducer.cart);
  const [qty, setQty] = useState(1);
  let intialWeights = [
    0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
    10,
  ];

  const [wightsVisibility, setWightsVisibility] = useState("d-none");

  const handleWeightClick = (e) => {
    setWightsVisibility("d-none");
    setQty(e.target.value);
  };

  return (
    <div className="Product">
      <div className="product-img">
        <Link to={`/product/${product.id}`}>
          <img src={product.image_url} alt="" />
        </Link>
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
          <Link to={`/product/${product.id}`}>
            <h6 className="product-name">
              {currentLanguage.code === "en"
                ? product.en_name
                : product.ar_name}
            </h6>
          </Link>
          <h6>
            {product.price}{" "}
            <span className="product-currency">{t("shop.price")}</span>
          </h6>
        </div>
        <div className="product-purchase">
          <button className="btn" onClick={() => setWightsVisibility("")}>
            {qty} KG <i className="bi bi-chevron-down"></i>
          </button>

          <div className="add-container">
            <button
              className="btn add"
              onClick={() => dispatch(addToCart(product.id, parseFloat(qty)))}
            >
              {t("shop.add_button")}
            </button>
          </div>
        </div>
      </div>
      <div className={`product-weight ${wightsVisibility}`}>
        <button
          onClick={() => setWightsVisibility("d-none")}
          className="btn weight weight-title"
        >
          Select Weight <i class="bi bi-x-lg"></i>
        </button>
        {intialWeights.map((weight) => (
          <button
            key={weight}
            value={weight}
            onClick={handleWeightClick}
            className="btn weight"
          >
            {`${weight}`} <span>KG</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
