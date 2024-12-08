"use client"

import React, { useState } from "react";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleFilter = () => {
    console.log(`Filter applied with: ${selectedValue}`);
  };
  return (
    <div className="flex justify-center items-center px-4 py-6">
  <div className="w-full max-w-[280px] sm:w-64">
    <div className="relative flex flex-col gap-3 sm:flex-row sm:gap-5">
      <select
        id="select-input"
        value={selectedValue}
        onChange={handleChange}
        className="block w-full sm:w-[141px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
      >
        <option value="" disabled hidden>
          Popularity ^
        </option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
        <option value="discount">Discount</option>
      </select>
      <button
        onClick={handleFilter}
        className="w-full sm:w-auto bg-[#23A6F0] text-white text-sm font-bold px-4 py-2 rounded-md shadow-sm hover:bg-[#1E90E0] transition-colors"
      >
        Filter
      </button>
    </div>
  </div>
</div>

  )
}

export default Filter