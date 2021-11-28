import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { exploreImage } from "../../images/index";
import { Product } from "../../components";

const ExploreProducts = ({ setCategoryId }) => {
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const products = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const currentCategory = useSelector(
    (state) => state.categoriesReducer.category
  );
  const categoryProducts = useSelector(
    (state) => state.categoriesReducer.categoryProducts
  );

  const slickRows = categoryProducts.length <= 3 ? 1 : 2;
  const slickInfinite = categoryProducts.length <= 6 ? false : true;

  var settings = {
    infinite: categoryProducts.length ? slickInfinite : true,
    rows: categoryProducts.length ? slickRows : 2,
    slidsesPerRow: 3,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <div className="explore-products">
      <div className="container">
        <h3>Explore products</h3>
        <div className="row equal-cols">
          <div className="col-md-5 p-2">
            <div className="row ">
              <div className="col-6 ">
                <Link to="/shop">
                  <img
                    src={exploreImage}
                    className={
                      currentLanguage.code === "ar" ? "ar-img" : "en-img"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <div
                className={`col-6 list ${
                  currentLanguage.code === "ar" ? "ar-list" : "en-list"
                }`}
              >
                <ul>
                  {categories
                    .sort((a, b) =>
                      currentLanguage.code === "en"
                        ? a.en_name.localeCompare(b.en_name)
                        : a.ar_name.localeCompare(b.ar_name)
                    )
                    .map((category) => (
                      <button
                        key={category.id}
                        className={`btn ${
                          currentCategory.id === category.id && "active-cat"
                        }`}
                        onClick={() => setCategoryId(category.id)}
                      >
                        <li>
                          {currentLanguage.code === "en"
                            ? category.en_name
                            : category.ar_name}
                        </li>
                      </button>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <Slider {...settings}>
              {categoryProducts.length
                ? categoryProducts.map((product) => (
                    <div key={product.id} className="p-2">
                      <Product product={product} />
                    </div>
                  ))
                : products.map((product) => (
                    <div key={product.id} className="p-2">
                      <Product product={product} />
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
