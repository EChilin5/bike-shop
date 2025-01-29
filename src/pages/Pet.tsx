import React, { useState } from "react";
import dogGroup from "../image/dog_group.jpeg";
import bikeproduct from "../image/bike-content.png";
import roadbike from "../image/roadbike.png";
import ProductCard from "../components/ProductCard";
import "./Pet.scss"
import PetCard from "../components/PetCard";

const Pet = () => {
  const [search, setSearch] = useState<string>("");

  let products = [
    {
      id: 0,
      title: "Road Bike",
      price: "$124",
      stock: "2",
      img: dogGroup,
    },
    {
      id: 1,
      title: "Beach Bike",
      price: "$300",
      stock: "10",
      img: dogGroup,
    },
    {
      id: 2,
      title: "Mountain Bike",
      price: "$1",
      stock: "7",
      img: dogGroup,
    },
    {
      id: 3,
      title: "Taco Bike",
      price: "$124",
      stock: "2",
      img: dogGroup,
    },
    {
      id: 4,
      title: "Lost Bike",
      price: "$300",
      stock: "10",
      img: dogGroup,
    },
    {
      id: 5,
      title: "Monster Bike",
      price: "$1",
      stock: "7",
      img: dogGroup,
    },
  ];

  const updateState = (value: string) => {
    setSearch(value);
  };

  const searchField = () => {
    const filteredPet =
      search.length > 0
        ? products.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
        : products;

    return filteredPet.map((item) => (
      <div key={item.id} className="pet-list-item">
        <PetCard
          title={item.title}
          price={item.price}
          stock={item.stock}
          img={item.img}
        />
      </div>
    ));
  };

  return (
    <div>
      <div className="pet-page">
        <div className="pet-hero">
          <img src={dogGroup} alt="pet" />
          <div className="pet-overlay">
            <div className="pet-overlay-title">Pet Adoption</div>
            <div className="pet-overlay-description">
              Find your next best friend at Fetch Dog Pet Adoption Agency.
              Helping dogs in shelter find there next home and a family best
              friend. 
            </div>
          </div>
        </div>
        <div className="pet-container">
          <div className="pet-container-category">
            <div className="category-filters">
              <div className="category-filters-title"> Breeds</div>
              <div className="category-filters-subcontent">
                {" "}
                German Shepoard
              </div>
              <div className="category-filters-subcontent"> Pit Bull</div>
              <div className="category-filters-subcontent"> Gears</div>
              <div className="category-filters-subcontent"> Accessories</div>
            </div>
          </div>
          <div className="pet-container-items">
            <div className="pet-search">
              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => updateState(e.target.value)}
              />
            </div>
            <div className="pet-list">{searchField()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
