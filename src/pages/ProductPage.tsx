import React, { useState } from "react";
import bikeproduct from "../image/bike-content.png";
import roadbike from "../image/roadbike.png";
import ProductCard from "../components/ProductCard";
import "./ProductPage.scss";
import { prettyDOM } from "@testing-library/react";

const ProductPage = () => {
  const [search, setSearch] = useState<string>("");

  let products = [
    {
      id: 0,
      title: "Road Bike",
      price: "$124",
      stock: "2",
      img: roadbike,
    },
    {
      id: 1,
      title: "Beach Bike",
      price: "$300",
      stock: "10",
      img: roadbike,
    },
    {
      id: 2,
      title: "Mountain Bike",
      price: "$1",
      stock: "7",
      img: roadbike,
    },
    {
      id: 3,
      title: "Taco Bike",
      price: "$124",
      stock: "2",
      img: roadbike,
    },
    {
      id: 4,
      title: "Lost Bike",
      price: "$300",
      stock: "10",
      img: roadbike,
    },
    {
      id: 5,
      title: "Monster Bike",
      price: "$1",
      stock: "7",
      img: roadbike,
    },
  ];

  const updateState = (value: string) => {
    setSearch(value);
  };


  const searchField = () => {
    const filteredProducts = search.length > 0 
      ? products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      : products;

    return filteredProducts.map((item) => (
      <div key={item.id} className="product-list-item">
        <ProductCard
          title={item.title}
          price={item.price}
          stock={item.stock}
          img={item.img}
        />
      </div>
    ));
  };

  return (
    <div className="product-page">
      <div className="product-hero">
        <img src={bikeproduct} alt="bike product" />
        <div className="product-overlay">
          <div className="product-overlay-title">Products</div>
          <div className="product-overlay-description">
            Maximize your ride with Vic's Bikes Tune-Up and Service! Our expert
            team offers comprehensive tune-up packages and individual services
            to keep your bike in peak condition. 
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="product-container-category">
          <div className="category-filters">
            <div className="category-filters-title"> Category</div>
            <div className="category-filters-subcontent"> Bicycles</div>
            <div className="category-filters-subcontent"> Tools</div>
            <div className="category-filters-subcontent"> Gears</div>
            <div className="category-filters-subcontent"> Accessories</div>
          </div>
        </div>
        <div className="product-container-items">
          <div className="product-search">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => updateState(e.target.value)}
            />
          </div>
          <div className="product-list">
            {searchField()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
