import React, { useEffect, useState } from "react";
import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  productFetch,
  productsFetch,
} from "../../redux/actions/productsActions";
import { PagePath } from "../../components";
import PagePatheLoading from "../../components/pagePathLoading/PagePathLoading";
import {
  addToCart,
  adjustItemQty,
  cartTotal,
} from "../../redux/actions/cartActions";
import moment from "moment";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.productsReducer.product);
  const productLoading = useSelector(
    (state) => state.productsReducer.productLoading
  );

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

  useEffect(() => {
    dispatch(productFetch(id));
    dispatch(productsFetch());
  }, [id]);

  return (
    <div className="ProductDetails container">
      {productLoading === true ? (
        <PagePatheLoading />
      ) : (
        <PagePath
          firstLink={"shop"}
          firstLinkTitle={"All Products"}
          secondLink={product.category && `category/${product.category.id}`}
          secondLinkTitle={product.category && product.category.en_name}
          currentPage={product.en_name}
        />
      )}

      <div className="row">
        <div className="col-md-4 img-wrapper">
          <img src={product.image_url} alt="" />
        </div>
        <div className="col-md-8">
          <div className="product-description">
            <h5 className="product-title">{product.en_name}</h5>
            <p className="product-count">Approx {product.count} pieces/kg</p>
            <h5 className="product-price">EGP {product.price}/Kg</h5>
          </div>
          <div className="product-purchase">
            <div class="dropdown d-inline">
              <button
                class="btn qty dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {qty} KG <i className="bi bi-chevron-down"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item weight-title">
                  Select Weight <i className="bi bi-x-lg"></i>
                </li>
                {intialWeights.map((weight) => (
                  <li className=" dropdown-item" key={weight}>
                    <button
                      className="btn weight"
                      key={weight}
                      value={weight}
                      onClick={handleWeightClick}
                    >
                      {weight} <span>KG</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn add"
              onClick={() => dispatch(addToCart(product.id, parseFloat(qty)))}
            >
              ADD TO CART
            </button>
          </div>
          <div className="product-features">
            <div className="free-delivery">
              <p>FREE DELIVERY</p>
            </div>
            <div>
              <p>
                Standard delivery:{" "}
                <span className="time">
                  {moment().add(30, "minutes").calendar()} -{" "}
                  {moment().add(60, "minutes").calendar()}
                </span>
              </p>
            </div>
            <div>
              <p>Approx {product.count} pieces per KG</p>
            </div>
            <div>
              <p>Freshness Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <h5>DESCRIPTION</h5>
        <p>
          Our wide assortment of meticulously hand-picked fruits and vegetables
          are stored each in their own suitable conditions; which ensures you to
          experience our high-quality fresh products. Whether you prefer
          imported or local products, Carrefour offers you wide ranges of
          healthy choices to choose from.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
