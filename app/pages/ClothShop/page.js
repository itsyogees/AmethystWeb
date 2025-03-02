"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { useRouter } from "next/navigation"; 
const ClothShop = () => {
  const [openFilter, setOpenFilter] = useState("CATEGORIES");
  const [openSubFilter, setOpenSubFilter] = useState("dogs");
  const [price, setPrice] = useState(30); // Default price value
  const router = useRouter();
  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const toggleSubFilter = (subFilterName) => {
    setOpenSubFilter((prev) => (prev === subFilterName ? null : subFilterName));
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = () => {
    router.push("/");
  };

  const collections = [
    {
      id: 1,
      image: "/image/Specialty6.jpeg",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
    {
      id: 2,
      image: "/image/Specialty7.jpeg",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
    {
      id: 3,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
    {
      id: 4,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
    {
      id: 5,
      image: "/image/Specialty9.png",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
    {
      id: 6,
      image: "/image/Specialty10.png",
      title: "Demo Product Name",
      oldPrice: "$600",
    },
  ];
  const [showFilter, setShowFilter] = useState(false);
   
  return (
    <div className="shoppage">
         <div className="shop-banner">
            <img src="/image/cloth.png" alt="" />
        </div>
      <div className="shoppageContainer">
        <div className="shoppageHead">
          <div className="shoppageHeadContainer">
            <h2>Featured Collection</h2>
            <p>Add featured products to weekly lineup</p>
          </div>
          <div className="templatesBtn">
            <button
              className="filterToggleBtn"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <LuSettings2 />
            </button>
          </div>
        </div>
        <div className="heroTabsContainer">
          <div className="searchInput">
            <div className="searchBox">
              <FiSearch size={20} />

              <input type="text" placeholder="Search here..." />
            </div>
          </div>
          {/* <div className="heroTabs">
            {["Latest Product", "Top Rating", "Best Selling"].map(
              (section, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === index + 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {section}
                </div>
              )
            )}
          </div> */}
        </div>
        <div className="shoppageContent">
          <div className="templatesContent">
            <div
              className={`templatesFilter ${showFilter ? "visible" : "hidden"}`}
            >
              {/* Trending Filters */}
              {/* <div className="filterinput">
                <FaSearch className="search-icon" />  
                <input type="text" placeholder="Search" />
              </div> */}

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("CATEGORIES")}
                  htmlFor="CATEGORIES"
                >
                  CATEGORIES{" "}
                  <span>
                    {openFilter === "CATEGORIES" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </label>
                {openFilter === "CATEGORIES" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>
                        <label onClick={() => toggleSubFilter("dogs")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "dogs" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "dogs" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("cats")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "cats" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "cats" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("Birds")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "Birds" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Birds" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("Aquarium")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "Aquarium" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Aquarium" && (
                          <ul className="subDropdown">
                           <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("Farm Animals")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "Farm Animals" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Farm Animals" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Price Filter */}

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("CATEGORIES")}
                  htmlFor="CATEGORIES"
                >
               BRAND
                  <span>
                    {openFilter === "CATEGORIES" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </label>
                {openFilter === "CATEGORIES" && (
                  <div className="templateCustomSelect">
                    <div className="priceRangeWrapper">
                      <div className="rangeLabels">
                        <span className="startPrice">$0</span>
                        <span className="endPrice">$80</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="80"
                        value={price}
                        onChange={handlePriceChange}
                        className="priceRangeSlider"
                      />
                      <div className="priceDisplay">Price: ${price}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* FOOD FOR PETS Filters */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("petsfood")}
                  htmlFor="petsfood"
                >
                  AVAILABILITY
                  <span>
                    {openFilter === "petsfood" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </label>
                {openFilter === "petsfood" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>
                        <label onClick={() => toggleSubFilter("dogsfood")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "dogsfood" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "dogsfood" && (
                          <ul className="subDropdown">
                           <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("catsfood")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "catsfood" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "catsfood" && (
                          <ul className="subDropdown">
                           <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("Birdsfood")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "Birdsfood" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Birdsfood" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label onClick={() => toggleSubFilter("Aquariumfood")}>
                        Demo Product Name
                          <span>
                            {openSubFilter === "Aquariumfood" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Aquariumfood" && (
                          <ul className="subDropdown">
                           <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <label
                          onClick={() => toggleSubFilter("Farm Animals food")}
                        >
                         Demo Product Name
                          <span>
                            {openSubFilter === "Farm Animals food" ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </label>
                        {openSubFilter === "Farm Animals food" && (
                          <ul className="subDropdown">
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                            <li>Product Name </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

           
            </div>

            <div className="templateCards">
              <div className="templateCardsContent">
                {collections.map((item) => (
                  <div
                    key={item.id}
                    className="tabCard"
                    onClick={handleCardClick}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={hoveredCard === item.id ? item.image : item.image}
                      alt={item.title}
                      className="templatecardImage"
                    />
                    <p>{item.title}</p>
                    <div className="tabPrice">
                      <p>{item.oldPrice}</p>
                      <p>{item.nexPrice}</p>
                    </div>
                    <div className="locate">
                    <FaRegHeart />
                  <CiShare2 />
                  <LiaRetweetSolid />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothShop;
