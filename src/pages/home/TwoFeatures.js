import React from "react";

const TwoFeatures = ({
  featureImage1,
  featureImage2,
  t,
  twoFeaturesImageDir,
  featureDescription,
}) => {
  return (
    <div className="two-features container ">
      <div className="row">
        <div className="col-lg-6 feature ">
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
        <div className="col-lg-6 feature">
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
  );
};

export default TwoFeatures;
