import React, { useEffect } from "react";
import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productFetch } from "../../redux/actions/productsActions";
import { PagePath } from "../../components";
import PagePatheLoading from "../../components/pagePathLoading/PagePathLoading";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.productsReducer.product);
  const productLoading = useSelector(
    (state) => state.productsReducer.productLoading
  );

  useEffect(() => {
    dispatch(productFetch(id));
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
          <h5>{product.en_name}</h5>

          <span>Approx {product.count} pieces/kg</span>
          <h6>EGP {product.price} /Kg</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
