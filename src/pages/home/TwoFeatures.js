import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { featureImage1, featureImage2 } from "../../images/index";

const TwoFeatures = ({ twoFeaturesImageDir, featureDescription }) => {
  const { t } = useTranslation();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  return (
    <div className="two-features container ">
      <div className="row">
        <div className="col-lg-6 feature ">
          <img
            src={featureImage1}
            className={`${currentLanguage.dir === "ltr" ? "" : "flip-image"}`}
            alt=""
          />
          <div
            className={`${
              currentLanguage.dir === "ltr"
                ? "en-feature-description"
                : "ar-feature-description"
            }`}
          >
            <h3>{t("two_features_feature1_description")}</h3>
            <button className="btn">{t("two_features_button")}</button>
          </div>
        </div>
        <div className="col-lg-6 feature">
          <img
            src={featureImage2}
            className={`${currentLanguage.dir === "ltr" ? "" : "flip-image"}`}
            alt=""
          />
          <div
            className={`${
              currentLanguage.dir === "ltr"
                ? "en-feature-description"
                : "ar-feature-description"
            }`}
          >
            <h3>{t("two_features_feature2_description")}</h3>
            <button className="btn">{t("two_features_button")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFeatures;
