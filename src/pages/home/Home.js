import React, { useEffect, useState } from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import carouselImage1 from "../../images/home/carousel-img1.jpg";
import carouselImage2 from "../../images/home/carousel-img2.jpg";
import featureImage1 from "../../images/home/two-features1.jpg";
import featureImage2 from "../../images/home/two-features2.jpg";

import { useSelector } from "react-redux";
import Offers from "./Offers";
import TwoFeatures from "./TwoFeatures";
import Carousel from "./Carousel";

const Home = () => {
  const { t } = useTranslation();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
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
      <div className="top-products container">
        <h3>Top Products</h3>
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
              Featured
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
              Bestseller
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
              Latest
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            a
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            .b
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            c
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
