import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch } from "react-redux";
import { productsFetch } from "../../redux/actions/productsActions";
import {
  categoriesFetch,
  categoryFetch,
} from "../../redux/actions/categoriesActions";
import Offers from "./Offers";
import TwoFeatures from "./TwoFeatures";
import Carousel from "./Carousel";
import TopProducts from "./TopProducts";
import ExploreProducts from "./ExploreProducts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(categoriesFetch());
  }, []);

  const [categoryId, setCategoryId] = useState(null);
  useEffect(() => {
    categoryId !== null && dispatch(categoryFetch(categoryId));
  }, [categoryId]);

  return (
    <div className="Home">
      {/* Carousel */}
      <Carousel />
      {/* two-features */}
      <TwoFeatures />
      {/* offers */}
      <Offers />
      {/* top products */}
      <TopProducts />
      {/* explore products */}
      <ExploreProducts setCategoryId={setCategoryId} />
    </div>
  );
};

export default Home;
