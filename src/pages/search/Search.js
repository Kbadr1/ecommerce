import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsBySearchQuery } from "../../redux/actions/searchActions";
import "./search.css";
import { useSelector } from "react-redux";
import { Product } from "../../components";
import { Link } from "react-router-dom";

const Search = () => {
  const filteredProducts = useSelector(
    (state) => state.searchReducer.filteredProducts
  );
  const query = useSelector((state) => state.searchReducer.query);
  const searchQuery = localStorage.getItem("searchQuery");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsBySearchQuery(query));
  }, [query]);
  return (
    <div className="Search container">
      {filteredProducts.length === 0 || query === "" ? null : (
        <div className="header">
          <h3>
            Search results for: <span>"{query}"</span>
          </h3>
        </div>
      )}
      <div className="row">
        {filteredProducts.length === 0 || query === "" ? (
          <div className="no-results text-center">
            <h2>No results found</h2>
            <h5>We couldn't find what you're looking for</h5>
            <Link to="/shop">
              <button className="btn">CONTINUE SHOPPING</button>
            </Link>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
