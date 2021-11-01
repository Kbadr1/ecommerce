import React, { useEffect, useState } from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import carouselImage1 from "../../images/home/carousel-img1.jpg";
import carouselImage2 from "../../images/home/carousel-img2.jpg";
import featureImage1 from "../../images/home/two-features1.jpg";
import featureImage2 from "../../images/home/two-features2.jpg";

import { useSelector } from "react-redux";

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
      <div className="carousel-container">
        <div className="container ">
          {/* carousel */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselImage1} className="d-block w-100" alt="..." />
                <div
                  className={`carousel-caption d-none d-md-block ${carouselText}`}
                >
                  <h1>{t("home_carousel_1_title")}</h1>
                  <p>{t("home_carousel_1_description")}</p>
                  <button className="btn">{t("home_carousel_button")}</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carouselImage2} className="d-block w-100" alt="..." />
                <div
                  className={`carousel-caption d-none d-md-block ${carouselText}`}
                >
                  <h1>{t("home_carousel_2_title")}</h1>
                  <p>{t("home_carousel_2_description")}</p>
                  <button className="btn">{t("home_carousel_button")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* two-features */}
      <div className="two-features container">
        <div className="row">
          <div className="col-6 feature">
            <img
              src={featureImage1}
              className={`${twoFeaturesImageDir}`}
              alt=""
            />
            <div className={`${featureDescription}`}>
              <h3>{t("two_features_feature1_description")}</h3>
              <button className="btn">{t("two_features_button")}</button>
            </div>
          </div>
          <div className="col-6 feature">
            <img
              src={featureImage2}
              className={`${twoFeaturesImageDir}`}
              alt=""
            />
            <div className={`${featureDescription}`}>
              <h3>{t("two_features_feature2_description")}</h3>
              <button className="btn">{t("two_features_button")}</button>
            </div>
          </div>
        </div>
      </div>
      {/* offers */}
      <div className="offers container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 offer-box">
            <div className="offers-icon">
              <i className="bi bi-gift"></i>
            </div>
            <div className="offers-description">
              <h5>Win $100 To Shop</h5>
              <p>Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 offer-box">
            <div className="offers-icon">
              <i className="bi bi-coin"></i>
            </div>
            <div className="offers-description">
              <h5>Win $100 To Shop</h5>
              <p>Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3  offer-box">
            <div className="offers-icon">
              <i className="bi bi-truck"></i>
            </div>
            <div className="offers-description">
              <h5>Win $100 To Shop</h5>
              <p>Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3  offer-box">
            <div className="offers-icon">
              <i className="bi bi-headset"></i>
            </div>
            <div className="offers-description">
              <h5>Win $100 To Shop</h5>
              <p>Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
        </div>
      </div>
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
