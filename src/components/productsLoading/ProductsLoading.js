import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductsLoading() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => (
    <div key={skeleton} className="col-6 col-md-6 col-lg-4">
      <Skeleton height={250} />
      <Skeleton width={"50%"} />
      <Skeleton />
      <Skeleton width={"50%"} />
      <Skeleton
        width={"40%"}
        style={{ marginRight: "20%", marginBottom: "22px" }}
        inline={true}
      />
      <Skeleton width={"40%"} inline={true} />
    </div>
  ));

  return <>{products}</>;
}

export default ProductsLoading;
