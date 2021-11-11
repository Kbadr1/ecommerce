import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductsLoading({ columns }) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => (
    <div key={skeleton} className={columns}>
      <Skeleton height={250} style={{ marginBottom: "10px" }} />
      <Skeleton
        width={`${Math.floor(Math.random() * 40) + 10}%`}
        style={{ marginBottom: "10px" }}
      />
      <Skeleton
        width={`${Math.floor(Math.random() * 50) + 50}%`}
        style={{ marginBottom: "10px" }}
      />
      <Skeleton
        width={`${Math.floor(Math.random() * 15) + 10}%`}
        style={{ marginBottom: "10px" }}
      />
      <Skeleton
        width={"35%"}
        style={{ marginRight: "30%", marginBottom: "22px" }}
        inline={true}
      />
      <Skeleton width={"35%"} inline={true} />
    </div>
  ));

  return <>{products}</>;
}

export default ProductsLoading;
