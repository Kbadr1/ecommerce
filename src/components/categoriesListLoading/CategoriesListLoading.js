import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CategoriesListLoading() {
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
    <li key={skeleton}>
      <Skeleton width={`${Math.floor(Math.random() * 50) + 25}%`} />
    </li>
  ));

  return <>{categories}</>;
}

export default CategoriesListLoading;
