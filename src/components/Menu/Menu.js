import React, { useEffect, useState } from "react";
import img from "../../imgs/cover.jpg";
import fakeData from "../../utilities/fakeData";
const Menu = () => {
  const [foodDetails, setFoodDetails] = useState([]);
  useEffect(() => {
    setFoodDetails(fakeData);
  }, []);
  return (
    <section>
      <div className="md:p-6 p-3 flex flex-wrap justify-center items-center m-auto">
        {foodDetails.map((food) => (
          <div className="md:w-80 w-full p-3 bg-white shadow m-4">
            <img src={food.img} alt="food img" className="w-full" />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Price: {food.price}$</p>
            <button
              type="button"
              className="flex justify-center items-center py-2 px-5 rounded text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none"
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
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
