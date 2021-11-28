import React from "react";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();

  return (
    <div className="offers container">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3 offer-box">
          <div className="offers-icon">
            <i className="bi bi-gift"></i>
          </div>
          <div className="offers-description">
            <h5>{t("home.offer1_title")}</h5>
            <p>{t("home.offer1_description")}</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 offer-box">
          <div className="offers-icon">
            <i className="bi bi-coin"></i>
          </div>
          <div className="offers-description">
            <h5>{t("home.offer2_title")}</h5>
            <p>{t("home.offer2_description")}</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3  offer-box">
          <div className="offers-icon">
            <i className="bi bi-truck"></i>
          </div>
          <div className="offers-description">
            <h5>{t("home.offer3_title")}</h5>
            <p>{t("home.offer3_description")}</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3  offer-box">
          <div className="offers-icon">
            <i className="bi bi-headset"></i>
          </div>
          <div className="offers-description">
            <h5>{t("home.offer4_title")}</h5>
            <p>{t("home.offer4_description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
