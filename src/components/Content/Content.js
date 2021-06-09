import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../utilities/fakeData";
import "./Content.css";

const Content = () => {
  const [foodDetails, setFoodDetails] = useState([]);
  useEffect(() => {
    setFoodDetails(fakeData.slice(0, 2));
  }, []);
  return (
    <>
      <h1 className="md:text-5xl mt-5 text-center font-bold">Hot Product</h1>
      {foodDetails.map((food) => (
        <div className="card">
          <img src={food.img} alt="food_image" className="card__img" />
          <div className="card__body">
            <h2 className="text-2xl mb-2">{food.name}</h2>
            <p className="mb-2">{food.description}</p>
            <span>{food.price} $</span>
            <br />
            <Link
              to="/"
              className="py-3 px-6 bg-yellow-500 rounded-full md:text-2xl sm:text-1xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
            >
              Order Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
