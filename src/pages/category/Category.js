import React, { useEffect } from "react";
import "./category.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { categoryFetch } from "../../redux/actions/categoriesActions";
import { productsFetch } from "../../redux/actions/productsActions";
import { useTranslation } from "react-i18next";
import {
  Product,
  CategoriesList,
  ProductsLoading,
  PagePath,
} from "../../components";
import PagePathLoading from "../../components/pagePathLoading/PagePathLoading";

const Category = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );
  const category = useSelector((state) => state.categoriesReducer.category);
  const categoryProducts = useSelector(
    (state) => state.categoriesReducer.categoryProducts
  );
  const categoryLoading = useSelector(
    (state) => state.categoriesReducer.categoryLoading
  );

  useEffect(() => {
    dispatch(categoryFetch(id));
    dispatch(productsFetch());
  }, [id]);

  const allProducts =
    categoryLoading === true ? (
      <ProductsLoading columns="col-6 col-md-6 col-lg-4" />
    ) : (
      <>
        {categoryProducts.map((product) => (
          <div key={product.id} className="col-6 col-md-6 col-lg-4">
            <Product product={product} />
          </div>
        ))}
      </>
    );

  return (
    <div className="Category container">
      {categoryLoading === true ? (
        <PagePathLoading />
      ) : (
        <PagePath
          firstLink={"shop"}
          firstLinkTitle={t("shop.all_products")}
          currentPage={
            currentLanguage.code === "en" ? category.en_name : category.ar_name
          }
        />
      )}

      <div className="row">
        <CategoriesList />
        <div className="col-md-8 col-lg-9">
          <div className="row">{allProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
