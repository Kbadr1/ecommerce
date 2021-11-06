import React from "react";

const Carousel = ({ t, carouselImage1, carouselImage2, carouselText }) => {
  return (
    <div className="carousel-container">
      <div className="container ">
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
                <h1>{t("home.carousel_1_title")}</h1>
                <p>{t("home.carousel_1_description")}</p>
                <button className="btn">{t("home.carousel_button")}</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carouselImage2} className="d-block w-100" alt="..." />
              <div
                className={`carousel-caption d-none d-md-block ${carouselText}`}
              >
                <h1>{t("home.carousel_2_title")}</h1>
                <p>{t("home.carousel_2_description")}</p>
                <button className="btn">{t("home.carousel_button")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
