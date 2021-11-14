import React, { useEffect, useState } from "react";
import "./home.css";
import { ProductsLoading, Product } from "../../components";

import { useTranslation } from "react-i18next";
import carouselImage1 from "../../images/home/carousel-img1.jpg";
import carouselImage2 from "../../images/home/carousel-img2.jpg";
import featureImage1 from "../../images/home/two-features1.jpg";
import featureImage2 from "../../images/home/two-features2.jpg";
import exploreImage from "../../images/home/explore.jpg";

import { useDispatch, useSelector } from "react-redux";
import Offers from "./Offers";
import TwoFeatures from "./TwoFeatures";
import Carousel from "./Carousel";
import { productsFetch } from "../../redux/actions/productsActions";
import TopProducts from "./TopProducts";
import {
  categoriesFetch,
  categoryFetch,
} from "../../redux/actions/categoriesActions";
import { Link } from "react-router-dom";
import ExploreProducts from "./ExploreProducts";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const products = useSelector((state) => state.productsReducer.products);
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const currentCategory = useSelector(
    (state) => state.categoriesReducer.category
  );
  const categoryProducts = useSelector(
    (state) => state.categoriesReducer.categoryProducts
  );

  const [carouselText, setCarouselText] = useState("");
  const [twoFeaturesImageDir, setTwoFeaturesImageDir] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const manageStylesByLanguage = () => {
    if (currentLanguage.dir === "ltr") {
      setCarouselText("text-start");
      setTwoFeaturesImageDir("");
      setFeatureDescription("en-feature-description");
    } else {
      setCarouselText("text-end");
      setTwoFeaturesImageDir("flip-image");
      setFeatureDescription("ar-feature-description");
    }
  };

  useEffect(() => {
    manageStylesByLanguage();
  }, [currentLanguage]);

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(categoriesFetch());
  }, []);

  const [categoryId, setCategoryId] = useState(null);
  useEffect(() => {
    dispatch(categoryFetch(categoryId));
  }, [categoryId]);

  return (
    <div className="Home">
      {/* Carousel */}
      <Carousel
        carouselImage1={carouselImage1}
        carouselImage2={carouselImage2}
        carouselText={carouselText}
        t={t}
      />
      {/* two-features */}
      <TwoFeatures
        featureImage1={featureImage1}
        featureImage2={featureImage2}
        t={t}
        twoFeaturesImageDir={twoFeaturesImageDir}
        featureDescription={featureDescription}
      />
      {/* offers */}
      <Offers t={t} />
      {/* top products */}
      <TopProducts t={t} products={products} />
      {/* explore products */}
      <ExploreProducts
        exploreImage={exploreImage}
        currentLanguage={currentLanguage}
        categories={categories}
        Product={Product}
        currentCategory={currentCategory}
        setCategoryId={setCategoryId}
        categoryProducts={categoryProducts}
        products={products}
      />
    </div>
  );
};

export default Home;
